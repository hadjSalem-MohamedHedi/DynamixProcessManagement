import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialEditBrandComponent } from './dial-edit-brand.component';

describe('DialEditBrandComponent', () => {
  let component: DialEditBrandComponent;
  let fixture: ComponentFixture<DialEditBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialEditBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialEditBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
