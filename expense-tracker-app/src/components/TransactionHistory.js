import React, {useContext} from "react";

//Import Transaction Component
import { Transaction } from './Transaction';

//Import the Global State

import { GlobalContext} from '../context/GlobalState';

export const TransactionHistory = () => {

  const { Transactions } = useContext(GlobalContext);

  return (
    <div>
        <h3>
            Transaction History
        </h3>
        <ul className="list">

            {Transactions.map(Transaction => 
                (
                <Transaction key={Transaction.id} transaction={Transaction} />
                )
            )}
        </ul>
    </div>
)
}