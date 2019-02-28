import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {


    constructor(private http: HttpClient) {

    }


    // TODO: CORS configuration
    // Configure cryptoservice to use private API instead of public one
    // 
    public getBtcmarketCap() {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/global/');
    }

    public getAllCryptos() {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/');
    }
    
    public getBtcPriceStats() {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.blockchain.info/charts/market-price?timespan=1year&rollingAverage=8hours&format=json');
    }
}