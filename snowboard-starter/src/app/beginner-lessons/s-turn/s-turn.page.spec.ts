import { ComponentFixture, TestBed } from '@angular/core/testing';
import { STurnPage } from './s-turn.page';

describe('STurnPage', () => {
  let component: STurnPage;
  let fixture: ComponentFixture<STurnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(STurnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
