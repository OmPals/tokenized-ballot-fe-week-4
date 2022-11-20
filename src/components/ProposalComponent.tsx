import { Contract, ethers } from 'ethers';
import { useEffect, useState, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { WalletContext } from '../context/WalletContext';

type Proposal = {
  idx: number,
  tkBallot: Contract | null
}

interface IFormInput {
  voteAmount: string;
}

export default function ProposalComponent(props: Proposal) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [btnText, setbtnText] = useState("This is a proposal, fetching name, Connect Wallet!");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [voted, setvoted] = useState<boolean>(false);
  const walletContext = useContext(WalletContext);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    await castVote(data.voteAmount);
  }

  const castVote = async (amount: string) => {
    if (walletContext) {
      if (props.tkBallot) {
        setIsLoading(true);
        props.tkBallot.connect(walletContext.signer?.Signer)
          .vote(0, ethers.utils.parseEther(amount)).then(() => {
            console.log("Vote done!");
            setvoted(true);
            setIsLoading(false);
          }).catch((err: any) => {
            console.log(err);
          })
      }
    }
  }

  useEffect(() => {
    if (walletContext) {
      if (props.tkBallot) {

        props.tkBallot
          .connect(walletContext.signer?.Signer)
          .proposals(props.idx)
          .then((value: any) => {
            console.log(value);
            const proposalName = ethers.utils.parseBytes32String(value.name);
            console.log(proposalName);
            setIsLoading(false);
            setbtnText(proposalName.toString());
          })
          .catch((err: any) =>{
            console.log(err)
            setIsLoading(false);
          });
      } else {
      }
    }

  });

  return (
    <div>
      <h3>Cast vote to - {btnText}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Vote Amount:
        </label>
        <input {...register("voteAmount")} />
        <input type="submit" />
      </form>
      <p>
        Voted: {voted.toString()} <br />  
        Loading: {isLoading.toString()}
      </p>
    </div>
  );
}
