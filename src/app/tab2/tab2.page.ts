import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  data:any;
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.weatherService.forecast().subscribe((result)=>{
      console.warn("result", result)
      this.data=result
    })
  }

  detailpage(item:string):void{
    let weather= {
      date: item['dt_txt'],
      temp: item['main'].temp,
      main: item['weather'][0].main,
      desc: item['weather'][0].description,
      icon: item['weather'][0].icon,
    }

    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(weather)
      }
    }

this.router.navigate(['/detail'], extras);
  };

}

