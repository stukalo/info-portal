import {Controller, Get } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';
import {ExchangeRate} from 'src/models';

@Controller('api')
export class ExchangeRatesController {
  constructor(private readonly exchangeRatesService: ExchangeRatesService) {}

  @Get('exchange-rates')
  getExchangeRates(): ExchangeRate[] {
    return this.exchangeRatesService.getExchangeRates();
  }
}
