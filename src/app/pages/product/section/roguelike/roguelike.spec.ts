import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roguelike } from './roguelike';

describe('Roguelike', () => {
  let component: Roguelike;
  let fixture: ComponentFixture<Roguelike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roguelike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roguelike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
