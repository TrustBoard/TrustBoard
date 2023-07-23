"use client";

import DepositETH from "@/components/DepositETH";
import ProposalDescription from "@/components/ProposalDescription";
import ProposalMembers from "@/components/ProposalMembers";
import ProposalSuccess from "@/components/ProposalSuccess";
import ProposalVote from "@/components/ProposalVote";
import WrapperModule from "@/components/WrapperModule";
import React, { useState } from "react";

const Page = () => {
  const [dropDown, setDropDown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col gap-7">
      {isSuccess ? (
        <ProposalSuccess />
      ) : (
        <>
          <WrapperModule notMargin={false}>
            <ProposalDescription
              dropDown={dropDown}
              setDropDown={setDropDown}
            />
          </WrapperModule>
          {dropDown ? <ProposalVote setIsSuccess={setIsSuccess} /> : null}
        </>
      )}

      <ProposalMembers dropDown={dropDown} />
      <div className="w-full h-44" />
    </div>
  );
};

export default Page;
