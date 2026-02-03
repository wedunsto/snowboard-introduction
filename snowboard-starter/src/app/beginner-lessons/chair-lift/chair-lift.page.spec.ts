import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChairLiftPage } from './chair-lift.page';

describe('ChairLiftPage', () => {
  let component: ChairLiftPage;
  let fixture: ComponentFixture<ChairLiftPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairLiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
