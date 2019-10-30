import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumpleannosComponent } from './cumpleannos.component';

describe('CumpleannosComponent', () => {
  let component: CumpleannosComponent;
  let fixture: ComponentFixture<CumpleannosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumpleannosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumpleannosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
