import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashConsComponent } from './dash-cons.component';

describe('DashConsComponent', () => {
  let component: DashConsComponent;
  let fixture: ComponentFixture<DashConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
