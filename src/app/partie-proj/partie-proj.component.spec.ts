import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieProjComponent } from './partie-proj.component';

describe('PartieProjComponent', () => {
  let component: PartieProjComponent;
  let fixture: ComponentFixture<PartieProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartieProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
