import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";


const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'exchange-rates', component: ExchangeRatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
