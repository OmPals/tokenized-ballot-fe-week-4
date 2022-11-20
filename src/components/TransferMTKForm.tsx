import { ethers } from "ethers";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MTKContext } from "../context/MTKContractContext";
import { WalletContext } from "../context/WalletContext";

interface IFormInput {
  address: string;
  tokens: string;
}

export default function TransferMTKForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false);
  const walletContext = useContext(WalletContext);
  const mtkContext = useContext(MTKContext);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    await transferMTK(data.address, data.tokens);
  }

  const transferMTK = async (address: string, tokens: string) => {
    if (walletContext) {
      if (mtkContext) {
        const contract = mtkContext.MTK?.Contract;
        const signer = await walletContext.signer?.Signer;
        setLoading(true);
        contract?.connect(signer).transfer(address, ethers.utils.parseEther(tokens))
        .then(() => {
          console.log("Transfer Done!");
          setLoading(false);
        }).catch((err: any) => {
          console.log(err);
        });
      }
      else {
        console.log("Connect Contract!");
      }
    }
    else {
      console.log("Connect Wallet!");
    }
  }

  return (
    <div>
      <h1>
        Transfer MTK Request Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Target Address:
        </label>
        <input {...register("address")} />
        <br />
        <label>
          Tokens:
        </label>
        <input {...register("tokens")} />
        <input type="submit" />
        <p>isLoading: {loading.toString()}</p>
      </form>
    </div>
  );
}