// machine-panel.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MachinePanelService {
  private isMachinePanelOpen = false;

  toggleMachinePanel() {
    this.isMachinePanelOpen = !this.isMachinePanelOpen;
  }

  getIsMachinePanelOpen() {
    return this.isMachinePanelOpen;
  }
}
