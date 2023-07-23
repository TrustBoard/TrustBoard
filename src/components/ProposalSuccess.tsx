"use client";

import React, { useEffect, useState } from "react";
import WrapperModule from "./WrapperModule";
import ProgressBar from "./ProgressBar";
import { votes } from "../utils/crypto";
import {
  TokenVotingClient,
  TokenVotingProposalListItem,
  TokenVotingProposalResult,
  VoteValues,
} from "@aragon/sdk-client";
import { divider } from "@/utils/crypto";

import { daoENS, useAragonSDKContext } from "../context/AragonSDK";

const ProposalSuccess = () => {
  const [results, setResults] = useState<number[]>([0, 0, 0]);

  const { context } = useAragonSDKContext();

  const fetchDao = () => {
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(context);

    async function fetchProposals() {
      const daoProposals: any = await tokenVotingClient.methods.getProposals({
        daoAddressOrEns: daoENS,
      });
      const { yes, no, abstain } = daoProposals[0].result;
      const _totalVotingWeight = Number(
        daoProposals[0].totalVotingWeight / divider
      );
      const _yes = Number(yes / divider);
      const _no = Number(no / divider);
      const _abstain = Number(abstain / divider);
      // console.log("hello help", _yes / _totalVotingWeight);
      setResults([
        Number(_yes / _totalVotingWeight) * 100,
        Number(_no / _totalVotingWeight) * 100,
        Number(_abstain / _totalVotingWeight) * 100,
      ]);
    }
    fetchProposals();
  };

  useEffect(() => {
    fetchDao();
  }, []);

  return (
    <div className="relative pointer-events-none">
      <div className=" absolute top-4 -left-[60px] bg-color2 rounded-xl text-white text-2xl font-semibold w-12 h-12 flex justify-center items-center">
        1
      </div>
      <WrapperModule>
        <h2 className="text-3xl font-semibold w-full text-left py-5 pl-5">
          Voting
        </h2>
        <div className="flex flex-col gap-10 mt-5">
          {votes.map((vote, index) => (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between w-full font-medium text-lg">
                <span>{vote.label} </span>
                <span> {results[index]}%</span>
              </div>
              <ProgressBar progress={results[index]} />
            </div>
          ))}
        </div>
      </WrapperModule>
    </div>
  );
};

export default ProposalSuccess;
