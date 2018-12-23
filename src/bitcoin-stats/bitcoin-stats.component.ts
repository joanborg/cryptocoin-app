import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from 'src/models/crypto-currency.class';
import { BtcPrice } from '../models/btc-price.class';
import { PriceCoordinates } from 'src/models/price-coordinates.interface';

@Component({
  selector: 'bitcoin-stats',
  templateUrl: './bitcoin-stats.component.html',
  styleUrls: ['./bitcoin-stats.component.css']
})
export class BitcoinStatsComponent {

  public bitcoinStats: BtcPrice = new BtcPrice();
  public prices: number[];
  public dates: string[];

  public options: any;
  public chartData: any;

  constructor(public cryptoService: CryptoService) {
   this.cryptoService.getBtcPriceStats().subscribe((data: any) => {
    this.bitcoinStats = new BtcPrice(data);
    this.prices = this.convertPrices();
    this.dates = this.convertDates();
    console.log(this.dates);
    
    this.chartData = {
      labels: [...this.dates],
      datasets: [
        {
          label: `Bitcoin (${this.bitcoinStats.unit})`,
          data: [...this.prices],
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: '#6699f6'
        }
      ]
    };
    this.options = {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(255, 255, 255, 0.3)"
          }
        }],
        yAxes: [{
          gridLines: {
            color: "rgba(255, 255, 255, 0.3)"
          },
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    };
   });
  

    }

    public convertPrices(): number[] {
      const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
        return Number((coordinates.y).toFixed(2));
      });
      return prices;
    }

    public convertDates(): string[] {
      const dates = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
        const rawDate = new Date(coordinates.x * 1000);

        return `${rawDate.getDay()}/${rawDate.getMonth()}/${rawDate.getFullYear()}`;
      });
      return dates;
    }

  }


