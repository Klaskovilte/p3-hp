import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnt3Component } from './cnt3.component';

describe('Cnt3Component', () => {
  let component: Cnt3Component;
  let fixture: ComponentFixture<Cnt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cnt3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
