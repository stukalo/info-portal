import {HttpService, Injectable} from '@nestjs/common';
import {ApiConfigService} from "../config/api-config.service";
import {Capital, Country} from "../models/country.model";

@Injectable()
export class CountriesService {
    private countries: Country[] = [];

    constructor(
        private httpService: HttpService,
        private apiConfigService: ApiConfigService,
    ) {
        this.updateCountries();
    }

    async getCountries(): Promise<Country[]> {
        return Promise.resolve(this.countries);
    }

    async getCapitals(): Promise<Capital[]> {
        return Promise.resolve(this.countries.map(country => ({
            name: country.capital,
            lat: country.latlng[0],
            lon: country.latlng[1],
        })));
    }

    private async updateCountries(): Promise<void> {
        try {
            const { data } = await this.httpService.get<Country[]>(this.apiConfigService.countriesApiUrl).toPromise();
            this.countries = <Country[]> data;
            this.countries = this.countries.filter(item => !!item.capital);
            this.countries.sort((a, b) => a.capital === b.capital ? 0 : a.capital > b.capital ? 1 : -1);
            console.log('countries updated');
        } catch (e) {
            console.log('countries update error', e);
        }
    }
}
