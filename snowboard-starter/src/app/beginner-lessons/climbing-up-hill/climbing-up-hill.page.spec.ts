import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimbingUpHillPage } from './climbing-up-hill.page';

describe('ClimbingUpHillPage', () => {
  let component: ClimbingUpHillPage;
  let fixture: ComponentFixture<ClimbingUpHillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingUpHillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
