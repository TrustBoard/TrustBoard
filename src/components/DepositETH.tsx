"use client";

import React, { useState } from "react";
import { Client, DaoDepositSteps, DepositEthParams } from "@aragon/sdk-client";
import { TokenType } from "@aragon/sdk-client-common";

import { ETHToWei } from "../utils/crypto";
import { useAragonSDKContext } from "../context/AragonSDK";
import { formatEther } from "ethers/lib/utils.js";

export default function DepositETH(): JSX.Element {
  const [amountOfETH, setAmountOfETH] = useState<number>(0);

  const { context } = useAragonSDKContext();

  async function depositEthToDao() {
    const client = new Client(context);

    const depositParams: DepositEthParams = {
      type: TokenType.NATIVE,
      amount: BigInt(ETHToWei(amountOfETH)),
      daoAddressOrEns: "0x23Dc80dAFA1db5bb8C41e12719963BCC50460cDD",
    };

    const steps = client.methods.deposit(depositParams);

    for await (const step of steps) {
      try {
        switch (step.key) {
          case DaoDepositSteps.DEPOSITING:
            alert(
              `Depositing ETH into DAO... here's your transaction: https://goerli.etherscan.io/tx/${step.txHash}`
            );
            break;
          case DaoDepositSteps.DONE:
            alert(
              `Deposit of ${formatEther(amountOfETH)} ETH into DAO complete!`
            );
            break;
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div className="mx-auto row g-3" style={{ width: "800px" }}>
      <h3 className="pt-4 text-center">Deposit ETH into ParksDAO</h3>

      <input
        type="number"
        min="0"
        step=".01"
        value={amountOfETH}
        className="form-control"
        aria-describedby="amountOfETH"
        onChange={(e) => setAmountOfETH(Number(e.target.value))}
      />

      <button className="btn-success" onClick={depositEthToDao}>
        Deposit
      </button>
    </div>
  );
}
