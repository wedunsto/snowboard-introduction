import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestToeEdgePage } from './test-toe-edge.page';

describe('TestToeEdgePage', () => {
  let component: TestToeEdgePage;
  let fixture: ComponentFixture<TestToeEdgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToeEdgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
