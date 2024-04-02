import { Component } from '@angular/core';

interface Link{
  label:string;
  path:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  links:Link[];

  constructor(){
    this.title="My Second Angular APP";
    this.links=[
      {path:"/wc",label:"Welcome"},
      {path:"/ddc",label:"Directives Demo"},
      {path:"/pdc",label:"Pipes Demo"},
    ];
  }
}
