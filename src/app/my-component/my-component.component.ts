import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MyPipePipe } from '../my-pipe.pipe';
import { PowerPipe } from '../pipes/power.pipe';
import { ChangeMeDirective } from '../shared/change-me.directive';
import { ChildComponent } from '../child/child.component';
import { HoverHighlightDirective } from '../shared/hover-highlight.directive';
import { ChangeBgColorDirective } from '../shared/change-bgcolor.directive';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '../model-driven-form/model-driven-form.component';

@Component({
  selector: 'app-my-component',
  imports: [CommonModule,
    ChangeMeDirective,
    HoverHighlightDirective,
    ChangeBgColorDirective,
    MyPipePipe,
    PowerPipe,
    ChildComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})

export class MyComponentComponent implements OnInit {
  isTrue = true;
  myCountry = "India"
  class1 = 'css1';
  class2 = 'css2';
  class3 = 'css3';
  class4 = "css1 css3";
  class5 = ['css2', 'css3'];

  isRed = true;
  color = "yellow"

  currentStyles: Record<string, string> = {};
  canSave = true;
  isUnchanged: boolean = true;
  isSpecial = true;

  age = 22;
  month = new Date().getMonth() + 1;
  countries: string[] = [
    'India', 'Canada', 'USA', 'UK', 'Australia', 'France', 'Russia', 'New Zealand', 'Germany', 'Italy'
  ];

  obj = {
    name: "Dinesh",
    Profession: "Web Developer",
    city: "Bangalore",
    state: "Karnataka",
    Country: "India"
  };

  price = 50.74;
  decimal = 12.3456789;
  currentDate: Date = new Date();

  colspan = 2;
  message = "Hello World!";
  img = "cat.JPG";

  isActive: boolean = false;
  name = 'HostBinding and HostListener';

  toggleDisable() {
    this.isTrue = !this.isTrue;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  setMessage(val: any) {
    this.message = val;
  }

  childData: any;
  getData(data: any) {
    this.childData = data;
  }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  setCurrentStyles(): any {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '50px' : '25px'
    };
  }

  /* @HostListener('click', ['$event'])
  show() {
    alert(this.message);
  } */

}
