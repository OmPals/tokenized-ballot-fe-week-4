import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MTKContext } from "../context/MTKContractContext";
import { WalletContext } from "../context/WalletContext";

interface IFormInput {
  address: string;
}

export default function DelegateVoteForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false);
  const walletContext = useContext(WalletContext);
  const mtkContext = useContext(MTKContext);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    await delegateVotes(data.address);
  }

  const delegateVotes = async (address: string) => {
    if (walletContext) {
      if (mtkContext) {
        const contract = mtkContext.MTK?.Contract;
        const signer = await walletContext.signer?.Signer;
        setLoading(true);
        contract?.connect(signer).delegate(address)
        .then(() => {
          console.log("Delegation Done!");
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
        Delegate Votes Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Target Address:
        </label>
        <input {...register("address")} />
        <input type="submit" />
        <p>isLoading: {loading.toString()}</p>
      </form>
    </div>
  );
}