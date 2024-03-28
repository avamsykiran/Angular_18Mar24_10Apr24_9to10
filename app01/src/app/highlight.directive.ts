import { Directive, ElementRef, HostListener, Input } from '@angular/core';

interface ColorCombo {
  bgColor:string;
  fgColor:string;
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  existingBgColor:string;
  existingFgColor:string;

  @Input()
  appHighlight!:string | ColorCombo;

  constructor(private ele:ElementRef) {
    this.existingBgColor = this.ele.nativeElement.style.backgroundColor;
    this.existingFgColor = this.ele.nativeElement.style.color;
  }

  ngOnChanges(){
    if(!this.appHighlight){
      this.appHighlight = "#00ff00";
    }
  }

  @HostListener("mouseover")
  applyHighLightColor(){
    if(typeof this.appHighlight==='string'){
      this.ele.nativeElement.style.backgroundColor=this.appHighlight;
    }else {
      this.ele.nativeElement.style.backgroundColor=this.appHighlight.bgColor;
      this.ele.nativeElement.style.color = this.appHighlight.fgColor;  
    }
  }

  @HostListener("mouseleave")
  applyActualBgColor(){
    this.ele.nativeElement.style.backgroundColor=this.existingBgColor;
    this.ele.nativeElement.style.color = this.existingFgColor;
  }
}
