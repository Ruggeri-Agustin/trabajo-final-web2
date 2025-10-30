import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoter } from './shoter';

describe('Shoter', () => {
  let component: Shoter;
  let fixture: ComponentFixture<Shoter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shoter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shoter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
