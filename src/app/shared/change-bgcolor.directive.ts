import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2) {
    this.changeColor('red');
    this.border = '0px solid green';
    this.borderRadius = '15px';
    this.talign = "center";
    this.padding = "10px";
  }

  @HostBinding('style.border') border: string;
  @HostBinding('style.border-radius') borderRadius: string;
  @HostBinding('style.text-align') talign: string;
  @HostBinding('style.padding') padding: string;

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('blue');
    this.border = '10px solid green';
    this.borderRadius = '25px';
    this.talign = "left";
    this.padding = "10px";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('green');
    this.border = '10px solid blue';
    this.borderRadius = '15px';
    this.talign = "right";
    this.padding = "10px";
  }

  @HostListener('click') onClick() {
    window.alert('This is HostBinding!');
  }

  changeColor(color: string) {
    this.renderer.setStyle(this.ele.nativeElement, 'color', color);
  }
}
