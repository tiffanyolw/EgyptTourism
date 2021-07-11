import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { CitiesInfo } from './data/citiesInfo';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities: City[] = CitiesInfo;

  constructor() { }

  getCitiesInfo(): City[] {
    return this.cities;
  }

}
