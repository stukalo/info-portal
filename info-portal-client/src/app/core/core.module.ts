import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  WeatherService,
  ExchangeRatesService,
} from './services';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    ExchangeRatesService,
  ],
  declarations: []
})
export class CoreModule { }
