import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify';


function App() {
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("User", user);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => Auth.federatedSignIn({
          provider: 'Facebook'
        })}>Login com o Facebook</button>
        <button onClick={() => Auth.federatedSignIn()}>Login</button>
        <button onClick={checkUser}>Dados do usuario</button>
      </header>
    </div>
  );
}

export default App;
