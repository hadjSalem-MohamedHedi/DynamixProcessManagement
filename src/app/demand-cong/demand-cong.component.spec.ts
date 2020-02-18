import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandCongComponent } from './demand-cong.component';

describe('DemandCongComponent', () => {
  let component: DemandCongComponent;
  let fixture: ComponentFixture<DemandCongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandCongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandCongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
