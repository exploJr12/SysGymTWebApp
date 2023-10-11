import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { RolComponent } from './pages/rol/rol.component';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { MachineComponent } from './pages/machine/machine.component';
import { MachinePanelComponent } from './pages/machine-panel/machine-panel.component';
import { ModalRolComponent } from './Modales/modal-rol/modal-rol.component';

@NgModule({
  declarations: [
    DashBoardComponent,
    RolComponent,
    MachineComponent,
    MachinePanelComponent,
    ModalRolComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
