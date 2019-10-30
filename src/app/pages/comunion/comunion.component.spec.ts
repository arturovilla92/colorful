import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunionComponent } from './comunion.component';

describe('ComunionComponent', () => {
  let component: ComunionComponent;
  let fixture: ComponentFixture<ComunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
