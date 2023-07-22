"use client";

import React, { useEffect, useState } from "react";
import {
  TokenVotingClient,
  VoteProposalParams,
  VoteProposalStep,
  VoteValues,
} from "@aragon/sdk-client";

import { useAragonSDKContext } from "../context/AragonSDK";
import classNames from "classnames";

const votes = [
  { label: "Yes", value: VoteValues.YES },
  { label: "No", value: VoteValues.NO },
  { label: "Abstain", value: VoteValues.ABSTAIN },
];

export default function VoteProposal() {
  const { context } = useAragonSDKContext();
  const [vote, setVote] = useState({ label: "", value: VoteValues.YES });

  const confirmVote = () => {
    // Create a TokenVoting client.
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(context);
    const voteParams: VoteProposalParams = {
      proposalId: "0x24a39c64c6fc4b1fb52cc552d830f4b6321c8f11_0x0", //use the fronf-end or hardcode it
      vote: vote.value, // enter the response: YES, NO, ABSTAIN
    };
    // Creates a vote on a given proposal created by the token voting governance mechanism.
    const steps = tokenVotingClient.methods.voteProposal(voteParams);
    const proposalStep = async () => {
      for await (const step of steps) {
        try {
          switch (step.key) {
            case VoteProposalStep.VOTING:
              console.log({ txHash: step.txHash });
              break;
            case VoteProposalStep.DONE:
              break;
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    proposalStep();
  };

  return (
    <div className="flex flex-col gap-7 items-center">
      <h2 className="text-3xl font-semibold w-full text-left">Vote</h2>
      <div className=" flex flex-row justify-center gap-7 w-full">
        {votes.map((v) => (
          <button
            className={classNames(
              "px-5 py-2 rounded-xl",
              vote.value === v.value
                ? " border border-blue-500 bg-blue-500 text-white"
                : "border border-blue-500 bg-white text-black"
            )}
            onClick={() => setVote(v)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <button
        onClick={confirmVote}
        className="border border-blue-500 bg-blue-500 text-white text-lg font-medium px-5 py-2 rounded-xl flex flex-row gap-2"
      >
        <span>Confirm</span>
      </button>
    </div>
  );
}
