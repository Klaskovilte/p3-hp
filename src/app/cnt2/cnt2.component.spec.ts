import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnt2Component } from './cnt2.component';

describe('Cnt2Component', () => {
  let component: Cnt2Component;
  let fixture: ComponentFixture<Cnt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cnt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
