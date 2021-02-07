import React, { useState, useEffect } from 'react'
import { stock } from '../resources/stock'
import '../styles/stockrow.css'

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

        stock.getYesterdaysClose(ticker, data.date)
        .then((data) => {
            const yesterdayData = data
            console.log(yesterdayData)
        })

        setData( formattedData )
        })
    }, [ticker])

    return (
        <li className="list-group-item">
            <b>{ticker}</b> ${data.price}
            <span className="change">
                 {data.dollar_change}
                 {data.percent_change}
            </span>
        </li>
    )
}

export default StockRow
