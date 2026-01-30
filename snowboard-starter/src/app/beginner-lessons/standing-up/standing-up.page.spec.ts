import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandingUpPage } from './standing-up.page';

describe('StandingUpPage', () => {
  let component: StandingUpPage;
  let fixture: ComponentFixture<StandingUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
