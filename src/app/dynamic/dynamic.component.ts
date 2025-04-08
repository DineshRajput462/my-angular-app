import { Component } from '@angular/core';
import { RenderOutlet } from '../render-outlet/render-outlet.component';

@Component({
  selector: 'app-dynamic',
  imports: [RenderOutlet],
  styleUrl: './dynamic.component.css',
  template: `
    <h3>Dynamic Template Example</h3>
    <ng-template #dynamicTemplate>
      <h4 style="background-color: red; color: white; padding: 10px; margin-top: 10px;">
        Content loaded dynamically
      </h4>
    </ng-template>
    <render-outlet [templateRef]="dynamicTemplate"></render-outlet>
  `
})
export class DynamicComponent {

}
