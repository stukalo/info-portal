import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../core/services";
import {Weather} from "../core/models";
import {Capital} from "../core/models/capital.model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  capitals: Capital[] = [];
  selectedCapital: Capital = {
    name: 'Kiev',
    lat: 49,
    lon: 32,
  };

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.getWeather();
    this.getCapitals();
  }

  onCapitalChange(capital: string): void {
    if (this.selectedCapital.name === capital) {
      return;
    }

    this.selectedCapital = this.capitals.find(item => item.name === capital);
    this.getWeather();
  }

  private getCapitals(): void {
    this.weatherService.getCapitals().subscribe(data => {
      this.capitals = data;
    });
  }

  private getWeather(): void {
    this.weatherService.getWeather(this.selectedCapital.name).subscribe(data => {this.weather = data});
  }
}
