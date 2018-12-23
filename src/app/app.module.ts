import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { CryptoTableComponent } from '../crypto-table/crypto-table.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BitcoinStatsComponent } from '../bitcoin-stats/bitcoin-stats.component';
import { CryptoFilterComponent } from '../crypto-filter/crypto-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    NotFoundComponent,
    BitcoinStatsComponent,
    CryptoFilterComponent
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    FormsModule
    
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
