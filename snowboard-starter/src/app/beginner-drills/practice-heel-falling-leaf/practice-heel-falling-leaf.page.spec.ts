import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeHeelFallingLeafPage } from './practice-heel-falling-leaf.page';

describe('PracticeHeelFallingLeafPage', () => {
  let component: PracticeHeelFallingLeafPage;
  let fixture: ComponentFixture<PracticeHeelFallingLeafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeHeelFallingLeafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
