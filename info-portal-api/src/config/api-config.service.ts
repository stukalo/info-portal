import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {
    }

    get exchangeRatesApiUrl(): string {
        return this.configService.get('EXCHANGE_RATES_API_URL');
    }

    get weatherApiKey(): string {
        return this.configService.get('WEATHER_API_KEY');
    }

    get weatherApiUrl(): string {
        return this.configService.get('WEATHER_API_URL');
    }

    get countriesApiUrl(): string {
        return this.configService.get('COUNTRIES_API_URL');
    }
}
