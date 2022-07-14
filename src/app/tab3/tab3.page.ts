import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
public fav:any;
  constructor() {
    let favorit = JSON.parse(localStorage.getItem('fav'));
    if(favorit==null){
      this.fav = [];
    }else{
      this.fav=favorit;
    }
    console.log(this.fav);
  }
}
