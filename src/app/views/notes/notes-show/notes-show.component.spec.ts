import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesShowComponent } from './notes-show.component';

describe('NotesShowComponent', () => {
  let component: NotesShowComponent;
  let fixture: ComponentFixture<NotesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
