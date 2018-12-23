export class BtcMarket {
    public btc_dominance: number;
    public active_cryptocurrencies: number;
    public total_market_cap: number;
    public active_markets: number;

    constructor(data?: any) {
        const defaults = {
         data: {
             quotes: {
                 USD: {}
             }
         },
         ...data
        };

        this.btc_dominance = defaults.data.bitcoin_percentage_of_market_cap;
        this.active_cryptocurrencies = defaults.data.active_cryptocurrencies;
        this.total_market_cap = defaults.data.quotes.USD.total_market_cap;
        this.active_markets = defaults.data.active_markets;
       
    }
}