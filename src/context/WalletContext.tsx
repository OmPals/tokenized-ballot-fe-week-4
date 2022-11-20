import React, { createContext, useState } from "react";

export type WalletUser = {
  IsConnected: boolean,
  Signer: any
}

type WalletContextProviderProps = {
  children: React.ReactNode
}

type SignerContextType = {
  signer: WalletUser | null,
  setSigner: React.Dispatch<React.SetStateAction<WalletUser | null>>
}

export const WalletContext = createContext<SignerContextType | null>(null);

export const WalletContextProvider = ({children}: WalletContextProviderProps) => {
  const [signer, setSigner] = useState<WalletUser | null>(null);

  return (<WalletContext.Provider value={{signer, setSigner}}>
    {children}
  </WalletContext.Provider>)
}

