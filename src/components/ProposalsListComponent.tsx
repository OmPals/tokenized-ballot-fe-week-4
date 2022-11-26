import { Contract, ethers } from 'ethers';
import { useEffect, useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import tkbJson from '../artifacts/contracts/TokenizedBallot.sol/TokenizedBallot.json';
import ProposalComponent from './ProposalComponent';
import VoterComponent from './VoterComponent';

type Proposal = {
  name: string,
  voteCount: string
}

export default function ProposalsListComponent() {
  const [tkBallot, setTkBallot] = useState<Contract | null>(null);
  const [winProp, setWinProp] = useState<Proposal>({
    name: "NA",
    voteCount: "0"
  });

  const walletContext = useContext(WalletContext);

  useEffect(() => {
    if (walletContext) {
      const tkBallot = new Contract("0x6F8Bea9B74f4E4a3328E2eA776D37c92E5Ede7Bb", tkbJson.abi,
        walletContext.signer?.Signer.provider);
      setTkBallot(tkBallot);
    } else {
    }

  }, [walletContext]);

  const getProposals = () => {
    const row = [];
    for (var i = 0; i < 5; i++) {
      row.push(
        <ProposalComponent idx={i} tkBallot={tkBallot} />
      );
    }
    return row;
  };

  const getWinningProposal = async () => {
    if (tkBallot) {
      const winningProposalIdx = await tkBallot.winningProposal();
      const winningProposal = await tkBallot.proposals(winningProposalIdx);
      console.log(winningProposal);

      setWinProp({
        name: ethers.utils.parseBytes32String(winningProposal.name),
        voteCount: ethers.utils.formatEther(winningProposal.voteCount)
      });
    }
    else {
      console.log("Tokenized Ballot not found!");
    }
  }

  return (
    <div>
      <h1>
        Ballot
      </h1>
      <VoterComponent />
      {
        getProposals()
      }
      <button onClick={getWinningProposal}>
        Get Winning Proposal
      </button>
      Winning proposal: <br />
      Name: {winProp?.name}
      <br />
      VoteCounts: {winProp?.voteCount.toString()}
      <br />
    </div>
  );
}
