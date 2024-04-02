import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: any): string {
    let str:string="";

    let strValue = `${value}`;

    for(let i=0;i<strValue.length;i++){
      let ch = strValue.charAt(i);

      if("."===ch){
        str = `${str} dot`;
      }else if(!isNaN(Number(ch))){
        str = `${str} ${this.digits[Number(ch)]}`;
      }
    }

    return str;
  }

}
