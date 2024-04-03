import { Component } from '@angular/core';
import { Link } from './models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  links:Link[];

  constructor(){
    this.title="AddressBook 1.0";
    this.links=[
      {path:"/list",label:"Contacts"},
      {path:"/add",label:"New Contact"}
    ];
  }
}
