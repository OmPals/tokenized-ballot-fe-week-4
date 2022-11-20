import React from "react";
import {
  BrowserRouter as Router,
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
    </Router>
  );
}
