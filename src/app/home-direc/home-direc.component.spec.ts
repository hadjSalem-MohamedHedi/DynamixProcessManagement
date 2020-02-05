import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirecComponent } from './home-direc.component';

describe('HomeDirecComponent', () => {
  let component: HomeDirecComponent;
  let fixture: ComponentFixture<HomeDirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
