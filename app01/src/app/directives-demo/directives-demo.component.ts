import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent {

  friends:string[];
  friendName!:string;

  constructor(){
    this.friends=[];
  }

  add(){
    if(this.friendName && this.friendName.trim().length>0){
      this.friends.push(this.friendName);
      this.friendName="";
    }
  }

  remove(index:number){
    this.friends.splice(index,1);
  }
}
