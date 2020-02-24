import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotefraisComponent } from './notefrais.component';

describe('NotefraisComponent', () => {
  let component: NotefraisComponent;
  let fixture: ComponentFixture<NotefraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotefraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotefraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
