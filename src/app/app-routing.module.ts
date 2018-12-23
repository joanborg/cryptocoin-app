import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoTableComponent } from 'src/crypto-table/crypto-table.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BitcoinStatsComponent } from '../bitcoin-stats/bitcoin-stats.component';

const routes: Routes = [
  { path: '', component: CryptoTableComponent },
  { path: 'bitcoin-stats', component: BitcoinStatsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
