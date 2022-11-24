import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import DelegateVoteForm from "./DelegateVoteForm";
import MintTokenForm from "./MintTokenForm";
import MyTokenComponent from "./MyTokenComponent";
import ProposalsListComponent from "./ProposalsListComponent";
import TokenRequestForm from "./TokenRequestForm";
import TransferMTKForm from "./TransferMTKForm";

export default function RouterComponent() {
  return (
    <Router>
      <Link to="/my-token">
        <button>MyToken - MTK</button>
      </Link>

      <Link to="/token-request-form">
        <button>Token Request Form</button>
      </Link>

      <Link to="/mint-my-token">
        <button>Mint MTKs Form</button>
      </Link>

      <Link to="/transfer-mtk-form">
        <button>Transfer MTKs Form</button>
      </Link>

      <Link to="/delegate-mtk-form">
        <button>Delegate MTKs Form</button>
      </Link>

      <Link to="/cast-vote">
        <button>MTK - Tokenized Ballot Voting</button>
      </Link>

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
