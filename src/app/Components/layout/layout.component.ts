import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMachineComponent } from '../layout/modales/machines/modal-machine.component'; // Importa la ubicación correcta del componente de modal

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private dialog: MatDialog) { }

  openMachineModal(): void {
    // Abre el modal de máquinaria
    const dialogRef = this.dialog.open(ModalMachineComponent, {
      disableClose: true,
      width: '400px', // Configura el ancho del modal según tus necesidades
      // Otras configuraciones del modal si es necesario
    });

    // Maneja el resultado del modal si es necesario
    dialogRef.afterClosed().subscribe(result => {
      // Realiza acciones según el resultado si es necesario
      if (result === "true") {
        // Por ejemplo, recarga los datos de la lista de máquinas
        // o realiza otras acciones necesarias.
      }
    });
  }
}
