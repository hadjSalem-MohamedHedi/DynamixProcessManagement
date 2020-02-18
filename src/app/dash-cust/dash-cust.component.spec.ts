import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCustComponent } from './dash-cust.component';

describe('DashCustComponent', () => {
  let component: DashCustComponent;
  let fixture: ComponentFixture<DashCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
