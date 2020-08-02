import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Weather} from '../models';
import {Capital} from '../models/capital.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
  ) { }

  getWeather(city: string): Observable<Weather> {
    const url = `${environment.weatherApiUrl}?city=${city}`;
    return this.http.get<Weather>(url);
  }

  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(environment.capitalsApiUrl);
  }
}

