import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDashBoardComponent } from './machine-dash-board.component';

describe('MachineDashBoardComponent', () => {
  let component: MachineDashBoardComponent;
  let fixture: ComponentFixture<MachineDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineDashBoardComponent]
    });
    fixture = TestBed.createComponent(MachineDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
