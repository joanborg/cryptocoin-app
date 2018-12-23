import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BtcMarket } from '../models/btc-market.class';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public btcMarketCap: BtcMarket = new BtcMarket();

  constructor(public cryptoService: CryptoService) {
    this.getBtcStats();
  }

  getBtcStats(): void {
    this.cryptoService.getBtcmarketCap().subscribe((data: any)  => {
      console.log(data);
      this.btcMarketCap = new BtcMarket(data);
      console.log(this.btcMarketCap);
    });
  }
  
}
