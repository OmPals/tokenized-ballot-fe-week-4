import WalletComponent from "./WalletComponent";

export default function HeaderComponent() {
  return (
  <div>
    <header className="App-header">
          <h1>Tokenized Ballot</h1>
          <WalletComponent />
        </header>
  </div>
)  
}