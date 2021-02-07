import React, { useState, useEffect } from 'react'
import { stock } from '../resources/stock'

const StockRow = ({ ticker }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        stock.latestPrice(ticker)
        .then((data) => {
            const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price =stockData.close
        formattedData.date =stockData.date
        formattedData.time =stockData.label


            setData( formattedData )
        })

        
    }, [ticker])

    return (
        <tr>
            <td>{ticker}</td>
            <td>{data.price}</td>
            <td>{data.date}</td>
            <td>{data.time}</td>
        </tr>
    )
}

export default StockRow
