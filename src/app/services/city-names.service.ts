import { Injectable } from '@angular/core';
import { CityWeather } from '../models/cityWeather';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class CityNamesService {
  constructor(private _weatherService: WeatherService) { }

  getCityNames(): string[] {
    let names: string[] = [];
    let cities: CityWeather[] = this._weatherService.getWeather();

    cities.forEach((item) => {
      names.push(item.city);
    });
    
    return names;
  }
}
