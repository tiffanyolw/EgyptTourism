import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cities", component: CitiesComponent },
  { path: "weather", component: WeatherComponent },
  { path: "weather/:city", component: WeatherDetailsComponent },
  { path: "tech-ideas", component: TechIdeasComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
