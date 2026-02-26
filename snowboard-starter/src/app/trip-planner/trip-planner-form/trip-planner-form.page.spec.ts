import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripPlannerFormPage } from './trip-planner-form.page';

describe('TripPlannerFormPage', () => {
  let component: TripPlannerFormPage;
  let fixture: ComponentFixture<TripPlannerFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlannerFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
