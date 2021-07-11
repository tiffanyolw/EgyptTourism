import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { CityWeather } from '../models/cityWeather';
import { CitiesService } from './cities.service';

@Injectable({
  providedIn: 'root'
})
export class CityNamesService {
  constructor(private _citiesService: CitiesService) { }

  getCityNames(): string[] {
    let names: string[] = [];
    let cities: City[] = this._citiesService.getCitiesInfo();

    cities.forEach((item) => {
      names.push(item.name);
    });
    
    return names;
  }
}
