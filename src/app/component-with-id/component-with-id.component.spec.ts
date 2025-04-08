import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithIDComponent } from './component-with-id.component';

describe('ComponentWithIDComponent', () => {
  let component: ComponentWithIDComponent;
  let fixture: ComponentFixture<ComponentWithIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentWithIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentWithIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
