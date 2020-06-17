import React from "react";

export const Accountsummary = () => {
  return (
    <div>
      <div className="inc-exp-container">
        <h4>Income</h4>
        <p>$0.00</p>
      </div>

      <div className="inc-exp-container">
        <h4>Expense</h4>
        <p className="money.plus">$0.00</p>
      </div>
    </div>
  );
};
