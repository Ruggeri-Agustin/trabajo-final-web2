import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terror } from './terror';

describe('Terror', () => {
  let component: Terror;
  let fixture: ComponentFixture<Terror>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terror]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terror);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
