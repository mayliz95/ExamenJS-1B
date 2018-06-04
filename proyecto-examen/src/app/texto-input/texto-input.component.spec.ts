import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoInputComponent } from './texto-input.component';

describe('TextoInputComponent', () => {
  let component: TextoInputComponent;
  let fixture: ComponentFixture<TextoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
