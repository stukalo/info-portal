import {Controller, Get, Query} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather } from "../models/weather.model";

@Controller('api')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get('weather')
    getWeather(@Query('city') city): Promise<Weather> {
        return this.weatherService.getWeather(city);
    }
}
