import React from "react";
import ContextProvider, { WalletContextProvider } from "../contexts/ContextProvider";
import "./styles/globals.css";
import "./styles/wallet.css";

/**
 *
 * @param Children --> This will be the rendered component in the current page
 * @returns --> A wrapper of providers such as Session, WalletContext around the Children param
 */
type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return <ContextProvider><WalletContextProvider>{children}</WalletContextProvider></ContextProvider>;
};

export default LayoutWrapper;
