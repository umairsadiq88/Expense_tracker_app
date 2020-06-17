import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Accountsummary } from "./components/Accountsummary";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Balance />
        <Accountsummary />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
