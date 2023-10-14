import { MachinesService } from './../../../../Services/machines.service';
import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Machines, GetMachines } from 'src/app/Interfaces/machines';
import { ModalMachineComponent } from '../../modales/machines/modal-machine.component';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';
import { ResponseApi } from 'src/app/Interfaces/response-api';


@Component({
    selector: 'app-machine',
    templateUrl: './machine.component.html',
    styleUrls: ['./machine.component.css'],
})
export class MachineComponent implements OnInit {

    columnTable: string[] = ['Nombre', 'Marca', 'NumeroDeSerie', 'Estado', 'fechaCompra', 'FechaMantenimiento', 'SiguienteMantenimiento', 'EncargadoMantenimiento'];
    dataStart: Machines[] = [];
    dataListMachines = new MatTableDataSource(this.dataStart);
    @ViewChild(MatPaginator) paginationTable!: MatPaginator;

    machines: GetMachines = {
        statusCode: 0,
        message: '',
        value: '',
        data: [
            {
                id_Machines: 0,
                id_Usuario: 0,
                machines_Name: '',
                brand: '',
                serial_Number: '',
                status: false,
                acquisition_Date: '',
                maintenance_Date: '',
                next_Maintenance_Date: '',
                usuario: null,
                top_Aux: 0
            }
        ]
    }

    constructor(
            private machineService: MachinesService,
            private matDialog: MatDialog,
            private utilityService: UtilidadService
        ) {}

    ngOnInit(): void {
        this.getMachinesList();
    }

    getMachinesList() {
        try {
            this.machineService.getMachinesList().subscribe( (response: GetMachines) => {
                this.machines = response
            })
        } catch (e) {
            console.error(e);
            throw new Error
        }
    }

    tableFiltter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataListMachines.filter = filterValue.trim().toLocaleLowerCase();
    }

    openMachineModal() {
        try {
            this.matDialog.open(ModalMachineComponent, {
                disableClose: true
            }).afterClosed().subscribe( result => {
                if (result === "true") {
                    this.getMachinesList();
                }
            })
        } catch (e) {
            console.error(e);
            throw new Error;
        }
    }

    ngAfterViewInit(): void {
        try {
            this.dataListMachines.paginator = this.paginationTable;
        } catch (e) {
            console.error(e);
            throw new Error;
        }
    }

    newMachine() {
        try {
            this.matDialog.open(ModalMachineComponent, {
                disableClose: true
            }).afterClosed().subscribe( resultado => {
                if (resultado === "true") {
                    this.getMachinesList();
                }
            });
        } catch (e) {
            console.error(e);
            throw new Error;
        }
    }
}



/*
export class MachineComponent implements OnInit {
    machines: GetMachines = {
        statusCode: 0,
        message: '',
        data: [
            {
                id_Usuario: 0,
                machines_Name: '',
                brand: '',
                serial_Number: '',
                status: false,
                acquisition_Date: '',
                maintenance_Date: '',
                next_Maintenance_Date: '',
                usuario: null,
                top_Aux: 0
            }
        ]
    };
*/
