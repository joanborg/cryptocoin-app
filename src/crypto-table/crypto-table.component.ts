import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from '../models/crypto-currency.class';
import { CryptoFilterComponent } from '../crypto-filter/crypto-filter.component';

@Component({
  selector: 'crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent {

  public top100Cryptos: CryptoCurrency[];
  public filteredCryptos: CryptoCurrency[];
  public priceUnit: string = 'USD';
  public sortValues: any = { 
    rank: false,
    market_cap_usd: true,
    price_usd: false,
    volume_24h: false,
    change_24h: false,
    name: false
   };

  constructor(public cryptoService: CryptoService) {
    this.getTop100Cryptos();
   }



 public getTop100Cryptos(): void {
   this.cryptoService.getAllCryptos().subscribe((data: any) => {
    this.top100Cryptos = data.map((element: any) => {
      return new CryptoCurrency(element);
    });
      this.filteredCryptos = this.top100Cryptos;
   });
 }

 public listenFilterCryptos(e: CryptoCurrency[]) {
  this.filteredCryptos = e;
}

public listenPriceUnit(e: string) {
  this.priceUnit = e;
}

 public sortNumeric(sortValue: boolean, key: string) {
   if(sortValue) {
     this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency,
      b: CryptoCurrency) => {
        return a[key] - b[key];
      }); 
    } else {
        this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b:
          CryptoCurrency) => {
            return b[key] - a[key];
          });
      }
      
   }

  public sortAlphabetic(sortValue: boolean) {
    if (sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
            return -1;
        } else if (nameA < nameB) {
            return 1;
        }

        return 0;
      });    
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
  }
}
}


