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
      <Link to="/my-token">
        <button>MyToken - MTK</button>
      </Link>
      {/* <p>
            Gets details about the MyToken contract. For the time being, we only have total supply of tokens
          </p> */}

      <Link to="/token-request-form">
        <button>Token Request Form</button>
      </Link>
      {/* <p>
            A form that calls a backend api of minter backend project, that simply creates a token request
          </p> */}

      <Link to="/mint-my-token">
        <button>Mint MTKs Form</button>
      </Link>
      {/* <p>
            A form that calls a backend api for minter backend project, that mints MTKs to a given wallet address
          </p> */}

      <Link to="/transfer-mtk-form">
        <button>Transfer MTKs Form</button>
      </Link>
      {/* <p>
            A form that interacts with the network to transfer certain MTKs to provided address
          </p> */}

      <Link to="/delegate-mtk-form">
        <button>Delegate MTKs Form</button>
      </Link>
      {/* <p>
            A form that interacts with the network to delegate all MTKs to provided address, which simply means delegating the whole voting power of own self
          </p> */}

      <Link to="/cast-vote">
        <button>MTK - Tokenized Ballot Voting</button>
      </Link>
      {/* <p>
            Displays Voting power of the voter and lets the vote with MTKs to the given proposals.
          </p> */}

      <Routes>
        <Route path='/my-token' element={<MyTokenComponent />} />
        <Route path='/token-request-form' element={<TokenRequestForm />} />
        <Route path='/mint-my-token' element={<MintTokenForm />} />
        <Route path='/transfer-mtk-form' element={<TransferMTKForm />} />
        <Route path='/delegate-mtk-form' element={<DelegateVoteForm />} />
        <Route path='/cast-vote' element={<ProposalsListComponent />} />
      </Routes>
    </Router>
  );
}
