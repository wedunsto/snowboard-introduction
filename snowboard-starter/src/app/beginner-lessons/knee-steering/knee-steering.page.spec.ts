import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KneeSteeringPage } from './knee-steering.page';

describe('KneeSteeringPage', () => {
  let component: KneeSteeringPage;
  let fixture: ComponentFixture<KneeSteeringPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeSteeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
