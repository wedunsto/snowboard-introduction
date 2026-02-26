import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeSTurnPage } from './practice-s-turn.page';

describe('PracticeSTurnPage', () => {
  let component: PracticeSTurnPage;
  let fixture: ComponentFixture<PracticeSTurnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSTurnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
