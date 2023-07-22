import DepositETH from "@/components/DepositETH";
import ProposalDescription from "@/components/ProposalDescription";
import ProposalVote from "@/components/ProposalVote";
import WrapperModule from "@/components/WrapperModule";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <WrapperModule notMargin={false}>
        <ProposalDescription />
      </WrapperModule>

      <WrapperModule notMargin={true}>
        <ProposalVote />
      </WrapperModule>
    </div>
  );
};

export default Page;
