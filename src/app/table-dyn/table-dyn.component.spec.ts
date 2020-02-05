import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynComponent } from './table-dyn.component';

describe('TableDynComponent', () => {
  let component: TableDynComponent;
  let fixture: ComponentFixture<TableDynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
