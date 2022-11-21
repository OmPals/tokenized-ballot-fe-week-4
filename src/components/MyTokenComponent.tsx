import { BigNumber, Contract, ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import mtkJson from '../artifacts/contracts/MyToken.sol/MyToken.json';
import { MTKContext } from '../context/MTKContractContext';

export default function MyTokenComponent() {
  const [data, setData] = useState<any>("Getting Total Supply...");
  const [loading, setLoading] = useState(true);
  const mtkContext = useContext(MTKContext);

  useEffect(() => {
    const provider = ethers.providers.getDefaultProvider('goerli');
    const mtkContract = new Contract("0xb5f175f4e7a83ff282B83Fb139EC99E19Cfe5B6c", mtkJson.abi, provider);

    mtkContext?.setMTK({
      Contract: mtkContract,
      IsConnected: true
    });
    setLoading(true)

    mtkContext?.MTK?.Contract
      .totalSupply()
      .then((value: BigNumber) => {
        console.log(value.toString());
        setData(ethers.utils.formatEther(value));
        setLoading(false);
      })
      .catch((err: any) => console.log(err));

  }, []);

  return (
    <div>
      <h1>Total Supply: {data}</h1>
      <p>Loading: {loading.toString()}</p>
    </div>
  );
}
