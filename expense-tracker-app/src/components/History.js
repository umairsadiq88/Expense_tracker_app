import React, { useState } from 'react'
import "../App.css"

const History = () => {
    const [obj, setObj] = useState([
        { item: "salary", cost: 200, delete: "x" },
        { item: "salary", cost: 200, delete: "x" },

    ])
    return (
        <div>
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <h1> History</h1>
            </div>
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <ul>
                    {obj.map((value, i) => (
                        <li key={i} className="history">
                            <div>{value.item}</div>
                            <div>{value.cost}</div>
                            <div><button>X</button></div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}


export default History;
