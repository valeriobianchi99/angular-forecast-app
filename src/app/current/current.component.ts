import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Meteo } from '../meteo.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  // Properties
  meteoCurrent = new Meteo();
  iconUrl = '';
  
  constructor(private currentService: WeatherService) { }

  ngOnInit() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(dataPosition => {
        const position = dataPosition.coords;
        this.currentService.getCurrent(position.latitude, position.longitude).subscribe(
          (data) => {
            this.meteoCurrent= data;
            this.iconUrl='https://openweathermap.org/img/wn/'+this.meteoCurrent.weather[0].icon+'@2x.png';
          }
        )
      });
    }
  }

}
