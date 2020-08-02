import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../core/services';
import {ExchangeRate} from '../core/models';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.less']
})
export class ExchangeRatesComponent implements OnInit {
  exchangeRates: ExchangeRate[] = [];

  constructor(
    private exchangeRatesService: ExchangeRatesService,
  ) {}

  ngOnInit(): void {
    this.exchangeRatesService.getExchangeRates()
      .subscribe(data => this.exchangeRates = data);
  }
}
