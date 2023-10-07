import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { RolComponent } from './pages/rol/rol.component';
import { ModalMachineComponent } from './modales/machines/modal-machine.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'Rol', component: RolComponent },
      { path: 'machines', component: ModalMachineComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
