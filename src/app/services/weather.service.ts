import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
   })
   export class WeatherService {
   url = 'https://api.openweathermap.org/data/2.5/';
   key = 'edf463e4c58110d0c8bb9a0930a76159';
   city = 'Yogyakarta';

   constructor(private http: HttpClient) { }

   getData(){
   return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
   }

   forecast(){
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
   }

   }
