import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeToeFallingLeafPage } from './practice-toe-falling-leaf.page';

describe('PracticeToeFallingLeafPage', () => {
  let component: PracticeToeFallingLeafPage;
  let fixture: ComponentFixture<PracticeToeFallingLeafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeToeFallingLeafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
