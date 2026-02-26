import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagingSpeedPage } from './managing-speed.page';

describe('ManagingSpeedPage', () => {
  let component: ManagingSpeedPage;
  let fixture: ComponentFixture<ManagingSpeedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingSpeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
