import React, {useContext} from "react";

//Import Transaction Component
import { Transaction } from './Transaction';

//Import the Global State

import { globalContext} from '../context/GlobalState';

export const TransactionHistory = () => {

  const { Transaction } = useContext(GlobalContext);

  return (
    <div>
        <h3>
            Transaction History
        </h3>
        <ul className="list">
            {transactions.map(transaction => 
                (
                <Transaction key={transaction.id} transaction={transaction} />
                )
            )}
        </ul>
    </div>
)
}