import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdornoComponent } from './adorno.component';

describe('AdornoComponent', () => {
  let component: AdornoComponent;
  let fixture: ComponentFixture<AdornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdornoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
