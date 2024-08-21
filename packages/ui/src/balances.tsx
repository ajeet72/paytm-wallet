"use client"

import { useBalance } from "@repo/store/useBalance"

export const Balances = () => {
  const balance = useBalance();
  return (
    <div className="text-5xl">
      this is the balance {balance}
    </div>
  );
};
