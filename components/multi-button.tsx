"use client";

import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

export default function WalletButton() {
  return (
    <div className=" relative z-[999]">
      <WalletMultiButtonDynamic className="wallet-button text-sm break-keep  flex items-center justify-center  text-white  py-[18px] px-[36px] rounded-[120px]  w-full" />
    </div>
  );
}
