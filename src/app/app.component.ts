import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RoutingComponent } from './routing/routing.component';

@Component({
  selector: 'app-root',
  imports: [RoutingComponent, NgStyle],
  templateUrl: './app.component.html',
  //template: `Hello World`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
