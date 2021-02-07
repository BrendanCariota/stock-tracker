import React, { useState, useEffect } from 'react'
import {iex} from '../config/iex'

const StockRow = ({ ticker }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        // query the API
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setData( data[data.length - 1] )
        })

        
    }, [ticker])

    return (
        <tr>
            <td>{ticker}</td>
            <td>{data.close}</td>
            <td>{data.date}</td>
            <td>{data.label}</td>
        </tr>
    )
}

export default StockRow
