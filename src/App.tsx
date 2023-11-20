import { useState } from 'react'
import './App.css'

function App() {

  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      // Check if Petra Wallet is available
      if (typeof window.aptos !== 'undefined') {
        // Connect to Petra Wallet
        const connect = await window.aptos.connect();

        console.log('Petra Wallet connected:', connect);
        setConnected(true);
      } else {
        console.error('Petra Wallet not found. Please install and try again.');
      }
    } catch (error) {
      console.error('Error connecting to Petra Wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      // Check if Petra Wallet is available
      if (typeof window.aptos !== 'undefined') {
        // Disonnect to Petra Wallet
        await window.aptos.disconnect();

        console.log('Petra Wallet disconnected');
        setConnected(false);
      } else {
        console.error("Petra Wallet wasn't disconnected. Please try again.");
      }
    } catch (error) {
      console.error('Error disconnecting to Petra Wallet:', error);
    }
  };

  return (
    <>
    <div>
      <button onClick={connectWallet} disabled={connected}>
        {connected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
      <button onClick={disconnectWallet} disabled={!connected}>
        {connected ? 'Disconnect Wallet' : 'Wallet Connected'}
      </button>
    </div>
    </>
  )
}

export default App
