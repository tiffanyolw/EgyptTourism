import { Component, OnInit } from '@angular/core';
import { CityWeather } from 'src/app/models/cityWeather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: CityWeather[] = [];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherData = this._weatherService.getWeather();
  }

}
