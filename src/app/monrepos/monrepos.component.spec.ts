import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonreposComponent } from './monrepos.component';

describe('MonreposComponent', () => {
  let component: MonreposComponent;
  let fixture: ComponentFixture<MonreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
