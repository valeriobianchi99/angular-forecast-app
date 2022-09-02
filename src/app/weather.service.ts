import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  // Properties
  private apikey: string = 'cd72d5ff50e365968e0c6af474f2198a';
  days=5;

  constructor(private http: HttpClient) { }

  // Returns current day weather informations
  getCurrent(lat, lon):any{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid='+this.apikey);
  }

  // Returns five days weather information
  getFiveDays(lat, lon):any{
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&units=metric&cnt='+this.days+'&appid='+this.apikey)
  }

}
