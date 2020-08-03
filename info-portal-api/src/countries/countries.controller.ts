import {Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';
import {Capital, Country} from "../models/country.model";

@Controller('api')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) {}

    @Get('countries')
    getCountries(): Promise<Country[]> {
        return this.countriesService.getCountries();
    }


    @Get('capitals')
    getCapitals(): Promise<Capital[]> {
        return this.countriesService.getCapitals();
    }
}
