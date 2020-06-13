import React from 'react';

const Balance = () => {
    return (
        <div>
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <h4>
                    Balance
        </h4>
        <br />
        <h3>$0</h3>
            </div>


            <div style={{ display: "flex", alignContent: "center", justifyContent: "space-around" }}>
                <div>Income</div>
                <div>Expense</div>
            </div>


        </div>

    )
}

export default Balance;