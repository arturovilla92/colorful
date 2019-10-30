import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualidadComponent } from './manualidad.component';

describe('ManualidadComponent', () => {
  let component: ManualidadComponent;
  let fixture: ComponentFixture<ManualidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
