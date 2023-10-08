import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-panel',
  templateUrl: './machine-panel.component.html',
  styleUrls: ['./machine-panel.component.css']
})
export class MachinePanelComponent {
  isMachinePanelOpen: boolean = false;

  toggleMachinePanel() {
    this.isMachinePanelOpen = !this.isMachinePanelOpen;
  }
}
