import './App.css';
import DelegateVoteForm from './components/DelegateVoteForm';
import HeaderComponent from './components/HeaderComponent';
import MyTokenComponent from './components/MyTokenComponent';
import ProposalsListComponent from './components/ProposalsListComponent';
import TransferMTKForm from './components/TransferMTKForm';
import VoterComponent from './components/VoterComponent';
import WalletComponent from './components/WalletComponent';
import { MTKContextProvider } from './context/MTKContractContext';
import { WalletContextProvider } from './context/WalletContext';
import RouterComponent from './RouterComponent';

function App() {
  return (
    <div className="App">
      <WalletContextProvider>
        <MTKContextProvider>
          <HeaderComponent />
          <RouterComponent />
        </MTKContextProvider>
      </WalletContextProvider>
    </div>
  );
}

export default App;
