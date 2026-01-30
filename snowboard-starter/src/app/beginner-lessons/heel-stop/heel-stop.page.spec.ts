import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeelStopPage } from './heel-stop.page';

describe('HeelStopPage', () => {
  let component: HeelStopPage;
  let fixture: ComponentFixture<HeelStopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeelStopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
