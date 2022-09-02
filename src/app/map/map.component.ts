import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // Properties
  lat: Number;
  lon: Number;
  mappa = true;
  v: string;

  constructor() { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(dataPosition => {
        const position = dataPosition.coords;
        console.log('MAP COORDINATES v')
        console.log(position);
        this.lat = position.latitude;
        this.lon = position.longitude;
      });
    }
  }

}
