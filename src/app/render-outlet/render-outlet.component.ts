import { Component, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'render-outlet',
  template: `<button (click)="loadTemplate()" class="btn btn-primary">Render</button>`
})
export class RenderOutlet {
  private viewContainer = inject(ViewContainerRef);
  @Input() templateRef: TemplateRef<unknown> | undefined;

  loadTemplate() {
    if (this.templateRef) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
