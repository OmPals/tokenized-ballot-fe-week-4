import { Contract } from "ethers";
import React, { createContext, useState } from "react";

export type MTK = {
  IsConnected: boolean,
  Contract: Contract
}

type MTKContextProviderProps = {
  children: React.ReactNode
}

type MTKContextType = {
  MTK: MTK | null,
  setMTK: React.Dispatch<React.SetStateAction<MTK | null>>
}

export const MTKContext = createContext<MTKContextType | null>(null);

export const MTKContextProvider = ({children}: MTKContextProviderProps) => {
  const [MTK, setMTK] = useState<MTK | null>(null);

  return (<MTKContext.Provider value={{MTK: MTK, setMTK: setMTK}}>
    {children}
  </MTKContext.Provider>)
}

