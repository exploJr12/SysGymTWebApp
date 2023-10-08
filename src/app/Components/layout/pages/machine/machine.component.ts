import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalMachineComponent } from '../../modales/machines/modal-machine.component';
import { Machines } from 'src/app/Interfaces/machines';
import { MachinesService } from 'src/app/Services/machines.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';

@Component({
    selector: 'app-machine',
    templateUrl: './machine.component.html',
    styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit, AfterViewInit {

    columnTable: string[] = ['nombre', 'marca', 'Numero de serie', 'Estado', 'fecha de compra', 'Fecha de mantenimiento', 'siguiente mantenimiento', 'encargado del mantenimiento'];
    dataStart: Machines[] = [];
    dataListMachines = new MatTableDataSource(this.dataStart);
    @ViewChild(MatPaginator) paginationTable!: MatPaginator;

    constructor(
        private matDialog: MatDialog,
        private _machineService: MachinesService,
        private _utilityService: UtilidadService
    ) { }

    getMachines() {
        this._machineService.getMachinesList().subscribe({
          next: (data: { status: boolean, value: any }) => { //adding value to data
            if (data.status) {
              this.dataListMachines.data = data.value;
            } else {
              this._utilityService.mostrarAlerta("No se encontraron datos", "error");
            }
          },
          error: (e: Error) => {
            console.error(e);
          }
        });
      }
      

    ngOnInit(): void {
 
    }

    ngAfterViewInit(): void {
        this.dataListMachines.paginator = this.paginationTable;
    }

    tableFiltter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataListMachines.filter = filterValue.trim().toLocaleLowerCase();
    }

    newMachine() {
        this.matDialog.open(ModalMachineComponent, {
            disableClose: true
        }).afterClosed().subscribe( resultado => {
            if (resultado === "true") {
                this.getMachines();
            }
        });
    }

    updateMachine(machine: Machines) {
        this.matDialog.open(ModalMachineComponent, {
            disableClose: true,
            data: machine
        }).afterClosed().subscribe( resultado => {
            if (resultado === "true") {
                this.getMachines();
            }
        });
    }

    deleteMachine(machine: Machines) {
        Swal.fire({
            title: '¿Desea eliminar la maquinaria?',
            text: machine.machines_Name,
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: "Eliminar",
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Volver'
        }).then( (result) => {
            if (result.isConfirmed) {
                this._machineService.deleteMachine(machine.id_Machines).subscribe({
                    next: (data) => {
                        if (data.status) {
                            this._utilityService.mostrarAlerta("La maquinaria fue eliminada", "Hecho");
                        } else {
                            this._utilityService.mostrarAlerta("La maquinaria fue eliminada", "Hecho");
                        }
                    }, error: (e: Error) => {
                        console.error(e);
                    }
                })
            }
        })
    }

    openMachineModal() {
        this.matDialog.open(ModalMachineComponent, {
            disableClose: true
        }).afterClosed().subscribe(resultado => {
            if (resultado === "true") {
                this.getMachines();
            }
        });
    }
    
}
