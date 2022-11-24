import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { MTKContextProvider } from './context/MTKContractContext';
import { WalletContextProvider } from './context/WalletContext';
import RouterComponent from './components/RouterComponent';

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
