import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RidingDownHillPage } from './riding-down-hill.page';

describe('RidingDownHillPage', () => {
  let component: RidingDownHillPage;
  let fixture: ComponentFixture<RidingDownHillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingDownHillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
