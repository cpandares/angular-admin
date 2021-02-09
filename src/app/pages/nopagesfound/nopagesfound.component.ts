import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: [ 
    './404.component.css'
  ]
})
export class NopagesfoundComponent  {

  constructor() { }

  year = new Date().getFullYear();

}
