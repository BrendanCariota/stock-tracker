import { iex } from '../config/iex'

export const stock = {
    
    latestPrice: (ticker) => {
        const query = fetch(stock.latestPriceURL(ticker)).then((response) => response.json()) //Returns promise - to chain another .then we need to return it
        return query
    },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price =stockData.close
        formattedData.date =stockData.date
        formattedData.time =stockData.label
        return formattedData
    }
}