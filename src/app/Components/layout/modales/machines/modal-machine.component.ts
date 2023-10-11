import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Machines } from 'src/app/Interfaces/machines';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { MachinesService } from 'src/app/Services/machines.service';


@Component({
    selector: 'app-modal-machines',
    templateUrl: './modal-machine.component.html',
    styleUrls: ['./modal-machine.component.css']
})
export class ModalMachineComponent implements OnInit {

    machineForm: FormGroup;
    actionTitle: string = "Agregar";
    actionButton: string = "Guardar";
    //userList: User[] = []

    constructor(
        private readonly actualModal: MatDialogRef<ModalMachineComponent>,
        @Inject(MAT_DIALOG_DATA) public MachineData: Machines,
        private formBuilder: FormBuilder,
        private _machinesService: MachinesService,
        //private _userService: UserService
        private _utilityService: UtilidadService
    ) {
        this.machineForm = this.formBuilder.group({
            id_Machines: ['', Validators.required],
            id_Usuario: ['', Validators.required],
            machines_Name: ['', Validators.required],
            brand: ['', Validators.required],
            serial_Number: ['', Validators.required],
            status: ['', Validators.required],
            acquisition_Date: ['', Validators.required],
            maintenance_Date: ['', Validators.required],
            next_Maintenance_Date: ['', Validators.required],
            usuario: ['', Validators.required],
            top_Aux: ['', Validators.required],
        })

        if (this.MachineData != null) {
            this.actionTitle = "Editar";
            this.actionButton = "Actualizar"
        }

    }
    ngOnInit(): void {
        if (this.MachineData != null) {

            this.machineForm.patchValue({
                //IdUsuario: this.userdata.name,
                machines_name: this.MachineData.machines_Name,
                brand: this.MachineData.brand,
                serial_number: this.MachineData.serial_Number,
                atatus: this.MachineData.status,
                acquisition_date: this.MachineData.acquisition_Date,
                maintenance_date: this.MachineData.maintenance_Date,
                next_maintenance_date: this.MachineData.next_Maintenance_Date
            })
        }
    }

    
}


/*
this._userService.userList().subscribe({
        next: (data) => {
            if (data.status) this.userList = data.value
        }, 
        error: (error: Error) => {
            console.error(error)
        }
       })
    }
*/