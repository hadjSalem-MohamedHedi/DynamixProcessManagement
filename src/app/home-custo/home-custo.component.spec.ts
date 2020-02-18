import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustoComponent } from './home-custo.component';

describe('HomeCustoComponent', () => {
  let component: HomeCustoComponent;
  let fixture: ComponentFixture<HomeCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
