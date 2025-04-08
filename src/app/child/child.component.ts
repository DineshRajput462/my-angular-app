import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // inputs: ["parentData"],
  // outputs: ["eventEmitter"]
})
export class ChildComponent {
  // Parent to child communication

  // Using component's "inputs" metadata
  // parentData: any;

  // Using "@Input" decorator
  @Input() parentData: any;

  // OR
  // @Input("parentData") parentData2: any;


  // Child to parent communication

  // Using component's "outputs" metadata
  // eventEmitter = new EventEmitter();

  // Using "@Output" decorator
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  // OR
  // @Output("eventEmitter") eventEmitter2 = new EventEmitter();

  sendData(data: any) {
    this.eventEmitter.emit(data);
  }
}
