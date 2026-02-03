import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproachFallLinePage } from './approach-fall-line.page';

describe('ApproachFallLinePage', () => {
  let component: ApproachFallLinePage;
  let fixture: ComponentFixture<ApproachFallLinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachFallLinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
