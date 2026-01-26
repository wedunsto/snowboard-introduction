import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToeStopPage } from './toe-stop.page';

describe('ToeStopPage', () => {
  let component: ToeStopPage;
  let fixture: ComponentFixture<ToeStopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeStopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
