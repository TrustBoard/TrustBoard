"use client";

import React, { useState, useEffect } from "react";
import WrapperModule from "./WrapperModule";
import { HiUserGroup } from "react-icons/hi";
import {
  Client,
  DaoDetails,
  TokenVotingClient,
  TokenVotingMember,
} from "@aragon/sdk-client";
import { useAragonSDKContext, daoENS } from "../context/AragonSDK";
import ProposalUser from "./ProposalUser";

const ProposalMembers = ({ dropDown }: boolean) => {
  const [members, setMembers] = useState<TokenVotingMember[]>([]);

  const { context } = useAragonSDKContext();

  async function getDaoMembers() {
    if (context) {
      const client = new Client(context);
      // console.log("Client: ", client);

      const dao: DaoDetails | null = await client.methods.getDao(daoENS);

      const pluginAddress: string = dao?.plugins[0].instanceAddress || "";
      // console.log("pluginAddress: ", pluginAddress);

      const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
        context
      );
      // console.log("tokenVotingClient: ", tokenVotingClient);

      const daoMembers: TokenVotingMember[] | undefined =
        (await tokenVotingClient.methods.getMembers(pluginAddress)) || [];
      setMembers(daoMembers);
    }
  }

  useEffect(() => {
    getDaoMembers();
  }, [dropDown]);

  return (
    <div className="absolute right-10 top-0 flex flex-col justify-end gap-3 w-full max-w-[20%] pointer-events-none">
      <WrapperModule _width="max-w-[100%]">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-semibold inline-block">
            {members.length} Members
          </h2>
          <HiUserGroup className="w-7 h-7 text-color1" />
        </div>
      </WrapperModule>

      {dropDown ? (
        <>
          {members.map((member) => (
            <ProposalUser member={member} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default ProposalMembers;
