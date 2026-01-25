import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkatingPage } from './skating.page';

describe('SkatingPage', () => {
  let component: SkatingPage;
  let fixture: ComponentFixture<SkatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
