import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESport } from './e-sport';

describe('ESport', () => {
  let component: ESport;
  let fixture: ComponentFixture<ESport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ESport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
