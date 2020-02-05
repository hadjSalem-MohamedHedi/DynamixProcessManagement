import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitsprojectsComponent } from './detaitsprojects.component';

describe('DetaitsprojectsComponent', () => {
  let component: DetaitsprojectsComponent;
  let fixture: ComponentFixture<DetaitsprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaitsprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaitsprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
