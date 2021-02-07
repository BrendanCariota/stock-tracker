import { iex } from '../config/iex'

export const stock = {
    
    latestPrice: (ticker) => {
        const query = fetch(stock.latestPriceURL(ticker)).then((response) => response.json()) //Returns promise - to chain another .then we need to return it
        return query
    },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    getYesterdaysClose: (ticker, date) => {
        const queryYesterday = fetch(stock.yesterdaysCloseURL(ticker, date)).then((response) => response.json())
        return queryYesterday
    },

    yesterdaysCloseURL: (ticker, date) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20200408&token=${iex.api_token}`
    }
}