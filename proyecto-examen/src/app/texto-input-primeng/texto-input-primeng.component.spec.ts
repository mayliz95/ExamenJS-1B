import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoInputPrimengComponent } from './texto-input-primeng.component';

describe('TextoInputPrimengComponent', () => {
  let component: TextoInputPrimengComponent;
  let fixture: ComponentFixture<TextoInputPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoInputPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoInputPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
