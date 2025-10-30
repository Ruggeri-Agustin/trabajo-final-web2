import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackNSlash } from './hack-n-slash';

describe('HackNSlash', () => {
  let component: HackNSlash;
  let fixture: ComponentFixture<HackNSlash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackNSlash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackNSlash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
