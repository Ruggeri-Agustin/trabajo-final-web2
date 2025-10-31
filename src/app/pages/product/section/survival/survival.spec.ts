import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Survival } from './survival';

describe('Survival', () => {
  let component: Survival;
  let fixture: ComponentFixture<Survival>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Survival]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Survival);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
