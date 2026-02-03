import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkingTurnsPage } from './linking-turns.page';

describe('LinkingTurnsPage', () => {
  let component: LinkingTurnsPage;
  let fixture: ComponentFixture<LinkingTurnsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingTurnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
