import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const TransactionHistory = () => {
  const { transactions, delTransaction } = useContext(GlobalContext);

    const sign = transactions.transactionAmount > 0 ? '+' : '-';
    const transactionType = transactions.transactionAmount > 0 ? 'plus' : 'minus';


  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction, i) => (
          <li className={transactionType}>
            {transaction.description}
            <span>
            ${sign}{Math.abs(transaction.transactionAmount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => delTransaction(transaction.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
