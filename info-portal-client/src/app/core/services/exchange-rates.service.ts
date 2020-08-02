import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ExchangeRate} from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(
    private http: HttpClient,
  ) { }

  getExchangeRates(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(environment.exchangeRatesApiUrl);
  }
}
