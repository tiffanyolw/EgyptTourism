import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from './../../models/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];


  constructor(private _citiesService: CitiesService) { }

  // color is green if >=3, black <3
  // if any city has 2 or fewer, return false
  colourIt() {
    for (let city of this.cities) {
      if (city.attractionSites.length < 3) {
        return false;
      }
    }

    return true;
  }

  ngOnInit(): void {
    this.cities = this._citiesService.getCitiesInfo();
  }

}
