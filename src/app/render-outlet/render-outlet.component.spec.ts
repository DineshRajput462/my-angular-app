import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderOutletComponent } from './render-outlet.component';

describe('RenderOutletComponent', () => {
  let component: RenderOutletComponent;
  let fixture: ComponentFixture<RenderOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
