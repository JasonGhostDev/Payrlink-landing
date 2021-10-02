import { UseWalletProvider } from 'use-wallet';

import "../scss/App.scss";
import Route from "../route/index";

import WalletProvider from '../contexts/WalletProvider';

function App() {
  return (
    <Providers>
      <Route />
    </Providers>
  );
}

const Providers = ({ children }) => {

  return (
    <UseWalletProvider>
      <WalletProvider>
        {children}
      </WalletProvider>
    </UseWalletProvider>
  )
}

export default App;
