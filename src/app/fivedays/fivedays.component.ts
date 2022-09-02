import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-fivedays',
  templateUrl: './fivedays.component.html',
  styleUrls: ['./fivedays.component.css']
})

export class FivedaysComponent implements OnInit {

  // Properties
  previsioni: any[];
  days = 5;
  newPrevisioni: any;

  constructor(private fivedaysService: WeatherService) {
    this.previsioni = [];
  }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(dataPosition => {
        const position = dataPosition.coords;
        this.fivedaysService.getFiveDays(position.latitude, position.longitude).subscribe(
          (data: any) => {
            this.previsioni = data.list;
            this.previsioni.map( x => {x.weather[0].icon = 'https://openweathermap.org/img/wn/'+x.weather[0].icon+'@2x.png'});
            console.log('FIVE DAYS v');
            console.log(this.previsioni);
          }
        );
      });
    }
  }

}
