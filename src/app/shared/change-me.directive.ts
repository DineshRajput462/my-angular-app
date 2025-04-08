import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {
  @Input('bg-color') bgColor = "black";
  @Input() color = "red";

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontSize = "20px";
    this.el.nativeElement.style.fontFamily = "courier";
  }

  ngOnInit() {
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
}
