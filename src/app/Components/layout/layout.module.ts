import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { RolComponent } from './pages/rol/rol.component';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';

@NgModule({
  declarations: [DashBoardComponent, RolComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
