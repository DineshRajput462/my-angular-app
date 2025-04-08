import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from '../child2/child2.component';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  template: `
    <p>Static content</p>
    <ng-template #templateOne>
      <p>First fragment</p>
    </ng-template>
    <ng-template #templateTwo>
      <p>Second fragment</p>
    </ng-template>
  `,
  selector: 'app-ng-template',
  imports: [CommonModule, Child2Component, DynamicComponent],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  showMessage: boolean = true;
  isLoggedIn: boolean = true;
  username: string = "Dinesh";

  // @ViewChild('templateOne', { read: TemplateRef }) templateOne: TemplateRef<unknown> | undefined;
  // @ViewChild('templateTwo', { read: TemplateRef }) templateTwo: TemplateRef<unknown> | undefined;

  constructor(private viewContainerRef: ViewContainerRef) { }

  toggleShow() {
    this.showMessage = !this.showMessage;
  }

  logout() {
    this.isLoggedIn = false;
  }

  showTemplate(myTemplate: any) {
    console.log(myTemplate);
    this.viewContainerRef.createEmbeddedView(myTemplate);
  }
}
