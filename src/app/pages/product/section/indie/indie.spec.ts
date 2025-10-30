import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indie } from './indie';

describe('Indie', () => {
  let component: Indie;
  let fixture: ComponentFixture<Indie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
