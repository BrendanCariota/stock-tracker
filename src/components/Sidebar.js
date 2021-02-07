import React from 'react'

import StockRow from './StockRow'

const Sidebar = () => {
    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                <StockRow ticker="aapl" />
                <StockRow ticker="goog" />
                <StockRow ticker="msft" />
                <StockRow ticker="tsla" />
            </ul>
        </div>
    )
}

export default Sidebar
