import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDeFarisComponent } from './note-de-faris.component';

describe('NoteDeFarisComponent', () => {
  let component: NoteDeFarisComponent;
  let fixture: ComponentFixture<NoteDeFarisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDeFarisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDeFarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
