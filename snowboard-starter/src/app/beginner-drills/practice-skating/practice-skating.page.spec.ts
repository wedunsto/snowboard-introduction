import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeSkatingPage } from './practice-skating.page';

describe('PracticeSkatingPage', () => {
  let component: PracticeSkatingPage;
  let fixture: ComponentFixture<PracticeSkatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSkatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
