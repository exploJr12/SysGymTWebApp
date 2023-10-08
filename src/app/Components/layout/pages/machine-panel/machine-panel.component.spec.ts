import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinePanelComponent } from './machine-panel.component';

describe('MachinePanelComponent', () => {
  let component: MachinePanelComponent;
  let fixture: ComponentFixture<MachinePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinePanelComponent]
    });
    fixture = TestBed.createComponent(MachinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
