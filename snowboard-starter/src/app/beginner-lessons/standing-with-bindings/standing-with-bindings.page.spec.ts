import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandingWithBindingsPage } from './standing-with-bindings.page';

describe('StandingWithBindingsPage', () => {
  let component: StandingWithBindingsPage;
  let fixture: ComponentFixture<StandingWithBindingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingWithBindingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
