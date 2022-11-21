import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import DelegateVoteForm from "./components/DelegateVoteForm";
import MintTokenForm from "./components/MintTokenForm";
import MyTokenComponent from "./components/MyTokenComponent";
import ProposalsListComponent from "./components/ProposalsListComponent";
import TokenRequestForm from "./components/TokenRequestForm";
import TransferMTKForm from "./components/TransferMTKForm";

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path='/my-token' element={<MyTokenComponent />} />
        <Route path='/token-request-form' element={<TokenRequestForm />} />
        <Route path='/mint-my-token' element={<MintTokenForm />} />
        <Route path='/transfer-mtk-form' element={<TransferMTKForm />} />
        <Route path='/delegate-mtk-form' element={<DelegateVoteForm />} />
        <Route path='/cast-vote' element={<ProposalsListComponent />} />
      </Routes>
      <ul>
        <li>
          <Link to="/my-token">
            MyToken - MTK
          </Link>
          <p>
            Gets details about the MyToken contract. For the time being, we only have total supply of tokens
          </p>
        </li>
        <li>
          <Link to="/token-request-form">
            Token Request Form
          </Link>
          <p>
            A form that calls a backend api of minter backend project, that simply creates a token request
          </p>
        </li>
        <li>
          <Link to="/mint-my-token">
            Mint MTKs Form
          </Link>
          <p>
            A form that calls a backend api for minter backend project, that mints MTKs to a given wallet address
          </p>
        </li>
        <li>
          <Link to="/transfer-mtk-form">
            Transfer MTKs Form
          </Link>
          <p>
            A form that interacts with the network to transfer certain MTKs to provided address
          </p>
        </li>
        <li>
          <Link to="/delegate-mtk-form">
            Delegate MTKs Form
          </Link>
          <p>
            A form that interacts with the network to delegate all MTKs to provided address, which simply means delegating the whole voting power of own self
          </p>
        </li>
        <li>
          <Link to="/cast-vote">
            MTK - Tokenized Ballot Voting
          </Link>
          <p>
            Displays Voting power of the voter and lets the vote with MTKs to the given proposals.
          </p>
        </li>
      </ul>
    </Router>
  );
}
