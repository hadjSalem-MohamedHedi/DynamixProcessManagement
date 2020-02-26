import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalTacheComponent } from './detal-tache.component';

describe('DetalTacheComponent', () => {
  let component: DetalTacheComponent;
  let fixture: ComponentFixture<DetalTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
