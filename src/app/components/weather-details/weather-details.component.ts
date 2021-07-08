import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityWeather } from 'src/app/models/cityWeather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weather: CityWeather|undefined;

  constructor(private route: ActivatedRoute, private _weatherService: WeatherService) {
    route.paramMap.subscribe((params) => {
      this.weather = this._weatherService.getWeatherByCity(params.get("city") || "");
    });
  }

  ngOnInit(): void {
  }

}
