import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCustoComponent } from './project-custo.component';

describe('ProjectCustoComponent', () => {
  let component: ProjectCustoComponent;
  let fixture: ComponentFixture<ProjectCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
