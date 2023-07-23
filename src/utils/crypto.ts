import { VoteValues } from "@aragon/sdk-client";

export function ETHToWei(ETHAmount: number): bigint {
  return BigInt(ETHAmount * 10 ** 18);
}

export const votes = [
  { label: "Yes", value: VoteValues.YES },
  { label: "No", value: VoteValues.NO },
  { label: "Abstain", value: VoteValues.ABSTAIN },
];

export const divider = 1000000000000000000n;
