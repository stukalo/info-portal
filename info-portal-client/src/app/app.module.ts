import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ExchangeRatesComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
