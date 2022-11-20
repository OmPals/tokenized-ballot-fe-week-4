import { BigNumber, Contract, ethers } from 'ethers';
import React, { useEffect, useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import tkbJson from '../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json';


export default function VoterComponent() {
  const [btnText, setbtnText] = useState("Connect Wallet!");
  const walletContext = useContext(WalletContext);

  useEffect(() => {
    if (walletContext) {
      // const provider = ethers.providers.getDefaultProvider('goerli');
      const tkBallot = new Contract("0x6F8Bea9B74f4E4a3328E2eA776D37c92E5Ede7Bb", tkbJson.abi,
        walletContext.signer?.Signer.provider);
      walletContext.signer?.Signer.getAddress().then((value: string) => {
        tkBallot
          .connect(walletContext.signer?.Signer)
          .votingPower(value)
          .then((value: BigNumber) => {
            const power = ethers.utils.formatEther(value);
            console.log(power);
            setbtnText(power);
          })
          .catch((err: any) => console.log(err));
      }).catch((err: any) => {
        console.log(err);
      });
    } else {
    }
  }, [walletContext]);

  return (
    <div>
      Your Voting Power: {btnText}
    </div>
  );
}
