import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallingLeafPage } from './falling-leaf.page';

describe('FallingLeafPage', () => {
  let component: FallingLeafPage;
  let fixture: ComponentFixture<FallingLeafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FallingLeafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
