import { ethers } from 'ethers';
import { useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext';


export default function WalletComponent() {
  const [btnText, setbtnText] = useState<string | undefined>("Connect Wallet");
  const walletContext = useContext(WalletContext);

  const connectWeb3 = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)

      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      console.log(signer);
      if (signer) {
        console.log("set!");
        walletContext?.setSigner({
          IsConnected: true,
          Signer: signer
        });
        
        const address = await walletContext?.signer?.Signer.getAddress();
        console.log(address);
        
        setbtnText(address);
      } else {
      }
    } else {
    }
  };

  return (
    <div>
      Click here everytime you connect new Wallet
      <br />
      <button onClick={connectWeb3}>Address: {btnText}</button>
    </div>
  );
}
