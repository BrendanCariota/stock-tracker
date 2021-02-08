import React, { useState, useEffect } from 'react'
import { stock } from '../resources/stock'
import '../styles/stockrow.css'

const StockRow = ({ ticker }) => {

    const [currentData, setCurrentData] = useState({})
    const [previousData, setPreviousData] = useState({})

    useEffect(() => {
        stock.latestPrice(ticker)
        .then((data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price =stockData.close.toFixed(2)
        formattedData.date =stockData.date
        formattedData.time =stockData.label

        stock.getYesterdaysClose(ticker, data.date)
        .then((data) => {
            const yesterdayData = data[data.length-1]
            const priceDiff = (formattedData.price - yesterdayData.close).toFixed(2)
            const percentDiff = (100 * (priceDiff / yesterdayData.close)).toFixed(1)
            const yesterdayFormattedData = {}
            yesterdayFormattedData.dollar_change = priceDiff
            yesterdayFormattedData.percent_change = percentDiff
            setPreviousData( yesterdayFormattedData )
        })

        setCurrentData( formattedData )
        })
    }, [ticker])

    return (
        <li className="list-group-item">
            <b>{ticker}</b> ${currentData.price}
            <span className="change">
                 {previousData.dollar_change}
                 &nbsp;{previousData.percent_change}
            </span>
        </li>
    )
}

export default StockRow
