import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreleaseComponent } from './detailrelease.component';

describe('DetailreleaseComponent', () => {
  let component: DetailreleaseComponent;
  let fixture: ComponentFixture<DetailreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
