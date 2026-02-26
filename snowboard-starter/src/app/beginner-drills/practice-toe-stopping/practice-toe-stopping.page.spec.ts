import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeToeStoppingPage } from './practice-toe-stopping.page';

describe('PracticeToeStoppingPage', () => {
  let component: PracticeToeStoppingPage;
  let fixture: ComponentFixture<PracticeToeStoppingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeToeStoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
