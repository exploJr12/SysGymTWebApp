import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { RolComponent } from './pages/rol/rol.component';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { ModalMachineComponent } from './modales/machines/modal-machine.component';
import { MachineComponent } from './pages/machine/machine.component';

@NgModule({
  declarations: [DashBoardComponent, RolComponent, MachineComponent, ], // add the component
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
