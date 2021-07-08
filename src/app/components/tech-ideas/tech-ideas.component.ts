import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { avoidWord } from 'src/app/custom-validators/avoidWord';
import { CityNamesService } from 'src/app/services/city-names.service';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  cities: string[] = [];
  techIdeas: FormGroup = this.builder.group({
    name: ["", [Validators.required, Validators.minLength(2), avoidWord(RegExp("tourist"))]],
    age: [""],
    email: ["", [Validators.required, Validators.email]],
    city: ["", [Validators.required]],
    desc: ["", [Validators.required, Validators.minLength(100), avoidWord(RegExp("nothing"))]],
  });

  constructor(private _cityNamesService: CityNamesService, private builder: FormBuilder) { }

  get nameControl() {
    return this.techIdeas.get('name');
  }

  get emailControl() {
    return this.techIdeas.get('email');
  }

  get cityControl() {
    return this.techIdeas.get('city');
  }

  get descControl() {
    return this.techIdeas.get('desc');
  }

  onSubmit() {
    console.log(this.techIdeas.value);
    this.techIdeas.reset();
  }

  ngOnInit(): void {
    this.cities = this._cityNamesService.getCityNames();
  }

}
