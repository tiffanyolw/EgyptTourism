import { Injectable } from '@angular/core';
import { CityWeather } from './../models/cityWeather';
import { CitiesWeather } from './data/citiesInfo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: CityWeather[] = CitiesWeather;

  constructor() { }

  getWeather(): CityWeather[] {
    return this.weather;
  }

  getWeatherByCity(city:string): CityWeather|undefined {
    return this.weather.find((cityWeather) => {
      return city === cityWeather.city;
    });
  }
}
