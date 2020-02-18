import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandAutoComponent } from './demand-auto.component';

describe('DemandAutoComponent', () => {
  let component: DemandAutoComponent;
  let fixture: ComponentFixture<DemandAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
