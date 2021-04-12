import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnt1Component } from './cnt1.component';

describe('Cnt1Component', () => {
  let component: Cnt1Component;
  let fixture: ComponentFixture<Cnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
