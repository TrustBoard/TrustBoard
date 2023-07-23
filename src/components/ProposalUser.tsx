import React from "react";
import WrapperModule from "./WrapperModule";
import truncateEthAddress from "truncate-eth-address";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { divider } from "@/utils/crypto";

const ProposalUser = ({ member }: any) => {
  return (
    <WrapperModule _width="max-w-[100%]" notMargin="true">
      <div className="flex flex-row justify-between items-center  overflow-hidden">
        <div className="flex flex-row items-center gap-3">
          {/* <img src="/profile_placeholder.png/" alt="" className="w-10 h-10" /> */}
          <Jazzicon diameter={40} seed={jsNumberForAddress(member.address)} />
          <span>{truncateEthAddress(member.address)}</span>
        </div>
        <span>
          {Number(member.votingPower / divider)} BSA (
          {Number(member.votingPower / divider)}%)
        </span>
      </div>
    </WrapperModule>
  );
};

export default ProposalUser;
