import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;

  banners:string[];
  bannerIndex:number;
  bannerWidth:number;

  applyCentered:boolean;
  applyBordered:boolean;

  constructor(){
    this.userName="Some Body";
    
    this.bannerIndex=0;
    this.bannerWidth=300;
    this.banners=[
      "assets/imgs/w1.png",
      "assets/imgs/w2.jpeg",
      "assets/imgs/w3.jpeg",
      "assets/imgs/w4.png"
    ];

    this.applyBordered=true;
    this.applyCentered=true;
  }

  shift(){
    this.bannerIndex++;
    if(this.bannerIndex===this.banners.length){
      this.bannerIndex=0;
    }
  }
}
