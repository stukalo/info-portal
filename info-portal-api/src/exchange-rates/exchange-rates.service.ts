import {HttpService, Injectable} from '@nestjs/common';
import {ApiConfigService} from "../config/api-config.service";
import {ExchangeRate} from "../models";

@Injectable()
export class ExchangeRatesService {
  private exchangeRates: ExchangeRate[];
  private readonly updateExchangeRatesTimeout = 5 * 60000;

  constructor(
      private httpService: HttpService,
      private apiConfigService: ApiConfigService,
  ) {
    this.runUpdateExchangeRates();
  }

  private async runUpdateExchangeRates(): Promise<void> {
    try {
      const now = new Date();
      const date = `${now.getDate()}.${now.getUTCMonth()}.${now.getFullYear()}`;
      const url = `${this.apiConfigService.exchangeRatesApiUrl}?json&date=${date}`;
      const { data } = await this.httpService.get(url).toPromise();
      this.exchangeRates = data.exchangeRate as ExchangeRate[];
      console.log('exchange rates updated');
    } catch(e) {
      console.log('exchange rates update error', e);
    } finally {
      setTimeout(() => this.runUpdateExchangeRates(), this.updateExchangeRatesTimeout);
    }
  }

  getExchangeRates(): ExchangeRate[] {
    return this.exchangeRates;
  }
}
