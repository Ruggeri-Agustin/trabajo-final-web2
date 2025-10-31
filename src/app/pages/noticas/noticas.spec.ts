import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticas } from './noticas';

describe('Noticas', () => {
  let component: Noticas;
  let fixture: ComponentFixture<Noticas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
