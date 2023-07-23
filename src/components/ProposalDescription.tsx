"use client";

import React, { useEffect, useState } from "react";
import {
  TokenVotingClient,
  TokenVotingProposalListItem,
  VoteProposalStep,
  VoteValues,
} from "@aragon/sdk-client";

import { daoENS, useAragonSDKContext } from "../context/AragonSDK";

//   async function vote(proposalId: string, voteInput: VoteValues) {
//     const voteParams = {
//       proposalId,
//       vote: voteInput
//     };

//     const steps = tokenVotingClient.methods.voteProposal(voteParams);

//     for await (const step of steps) {
//       try {
//         switch (step.key) {
//           case VoteProposalStep.VOTING:
//             alert(`Voting... Review your transaction here: https://goerli.etherscan.io/tx/${step.txHash}`);
//             break;
//           case VoteProposalStep.DONE:
//             alert(`Vote casted for proposal ${proposalId}!`);
//             break;
//         }
//       } catch (err) {
//         alert(err);
//       }
//     }
//   }

const ProposalDescription = ({ dropDown, setDropDown }: any) => {
  const [proposals, setProposals] = useState<TokenVotingProposalListItem[]>([]);

  const { context } = useAragonSDKContext();

  const fetchDao = () => {
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(context);

    async function fetchProposals() {
      const daoProposals: TokenVotingProposalListItem[] =
        await tokenVotingClient.methods.getProposals({
          daoAddressOrEns: daoENS,
        });
      console.log("daoProposals", daoProposals);
      setProposals(daoProposals);
    }
    fetchProposals();
    setDropDown(true);
  };

  return (
    <div className=" relative">
      <div className=" absolute top-4 -left-[60px] bg-color2 rounded-xl text-white text-2xl font-semibold w-12 h-12 flex justify-center items-center">
        1
      </div>
      {!dropDown ? (
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-3xl py-4 pl-4">
            Exploring New Horizons: Aragon Sponsorship Proposal
          </h2>
          <p>
            The <strong>Blockchain Student Association</strong> (BSA) at{" "}
            <strong>École Polytechnique Fédérale de Lausanne</strong> (EPFL) is
            committed to fostering an environment of innovation, learning, and
            growth within the blockchain space. As we seek to further enhance
            our initiatives and expand the possibilities for our members, we
            propose considering a sponsorship opportunity with{" "}
            <strong>Aragon</strong> – a prominent and pioneering organization in
            the blockchain and decentralized governance sphere.
          </p>
          <button
            onClick={fetchDao}
            className="text-color2 font-medium duration-200 hover:opacity-80"
          >
            See more
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-3xl py-4 pl-4">
            Exploring New Horizons: Aragon Sponsorship Proposal
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Aragon: A Leader in Decentralized Governance:</strong>{" "}
              Aragon is renowned for its groundbreaking work in building
              decentralized autonomous organizations (DAOs) and providing tools
              for transparent and community-driven decision-making. With their
              mission aligned with BSA's core values, Aragon's sponsorship has
              the potential to create an exciting synergy that will elevate our
              activities and educational endeavors to new heights.
            </p>
            <p>
              <strong>Sponsorship Benefits:</strong> By establishing a
              collaboration with Aragon, BSA will unlock numerous benefits that
              align with our objectives:
            </p>
            <ol>
              <li>
                <p>
                  <strong>Access to Cutting-Edge Technology:</strong> Aragon's
                  expertise in decentralized governance and DAO frameworks will
                  provide BSA members with access to cutting-edge technology,
                  expanding their knowledge and practical skills in blockchain
                  development.
                </p>
              </li>
              <li>
                <p>
                  <strong>Enhanced Educational Opportunities:</strong> With
                  Aragon's support, BSA can organize specialized workshops and
                  seminars led by experts from their team, delving deeper into
                  decentralized governance mechanisms and advanced blockchain
                  concepts.
                </p>
              </li>
              <li>
                <p>
                  <strong>Community Recognition:</strong> The association with
                  Aragon will enhance BSA's reputation as a forward-thinking
                  student organization, attracting more blockchain enthusiasts
                  and contributors to our community.
                </p>
              </li>
              <li>
                <p>
                  <strong>Networking and Career Opportunities:</strong> Aragon's
                  established network in the blockchain industry will offer our
                  members unique networking opportunities and potential
                  internships or job prospects.
                </p>
              </li>
              <li>
                <p>
                  <strong>Showcasing Collaboration:</strong> A sponsorship with
                  Aragon will serve as a testament to the collaborative spirit
                  within the blockchain community and the impact that joint
                  initiatives can have on shaping the future of the technology.
                </p>
              </li>
            </ol>
            <p>
              <strong>Proposal and Decision:</strong> We propose forming a
              committee within BSA to assess the feasibility and relevance of
              engaging Aragon as a sponsor. The committee will conduct a
              thorough analysis of how Aragon's sponsorship aligns with BSA's
              objectives and the potential value it brings to our community.
            </p>
            <p>
              Once the committee completes its evaluation, we will convene to
              discuss their findings and make a collective decision on whether
              to reach out to Aragon for sponsorship. The ultimate decision will
              be based on the benefits, alignment of values, and the positive
              impact this partnership can have on our members' growth and the
              broader blockchain ecosystem.
            </p>
            <p>
              <strong>Conclusion:</strong> In considering this proposal, we open
              the door to an exciting opportunity to collaborate with a leading
              organization in the blockchain space. Together, we can empower our
              members with cutting-edge knowledge and experiences, accelerating
              the growth of blockchain technology at EPFL, and contributing to
              the broader blockchain community. Let us embark on this journey of
              exploration and innovation, as we seek to unlock new horizons
              through the potential sponsorship with Aragon.
            </p>
          </div>
          <button
            onClick={() => setDropDown(false)}
            className="text-color2 font-medium duration-200 hover:opacity-80"
          >
            See less
          </button>
        </div>
      )}
    </div>
  );
};

export default ProposalDescription;
