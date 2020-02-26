import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSprintComponent } from './detail-sprint.component';

describe('DetailSprintComponent', () => {
  let component: DetailSprintComponent;
  let fixture: ComponentFixture<DetailSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
