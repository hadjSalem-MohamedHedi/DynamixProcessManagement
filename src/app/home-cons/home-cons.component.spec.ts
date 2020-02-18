import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsComponent } from './home-cons.component';

describe('HomeConsComponent', () => {
  let component: HomeConsComponent;
  let fixture: ComponentFixture<HomeConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
