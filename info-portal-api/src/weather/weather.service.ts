import {HttpService, Injectable} from '@nestjs/common';
import {ApiConfigService} from "../config/api-config.service";
import { Weather } from "../models/weather.model";

@Injectable()
export class WeatherService {

    constructor(
        private httpService: HttpService,
        private apiConfigService: ApiConfigService,
    ) {
    }

    async getWeather(city: string): Promise<Weather> {
        const { weatherApiUrl, weatherApiKey } = this.apiConfigService;
        const url = `${weatherApiUrl}?key=${weatherApiKey}&q=${city}`;

        try {
            return (await this.httpService.get(url).toPromise()).data;
        } catch (e) {
            console.log('getWeather ERROR');
            return null;
        }
    }
}
