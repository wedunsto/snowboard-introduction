import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurnSkatingPage } from './turn-skating.page';

describe('TurnSkatingPage', () => {
  let component: TurnSkatingPage;
  let fixture: ComponentFixture<TurnSkatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnSkatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
