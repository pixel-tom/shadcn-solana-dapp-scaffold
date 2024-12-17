// contexts/ContextProvider.tsx
"use client";

import { WalletError } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { FC, ReactNode, useCallback, useMemo } from "react";
import { WalletModalProvider as ReactUIWalletModalProvider } from "@solana/wallet-adapter-react-ui";

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const wallets = useMemo(() => [], []);

  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);

  const endpoint = `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS_URL}`;

  return (
    <ConnectionProvider endpoint={endpoint!}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={false}>
        <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;