import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';

import { Machines } from 'src/app/Interfaces/machines';
import { MachinesService } from 'src/app/Services/machines.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-machine',
  templateUrl: './modal-machine.component.html',
  styleUrls: ['./modal-machine.component.css']
})
export class ModalMachineComponent {
  machineForm: FormGroup;
  actionTitle: string = "Agregar";
  actionButton: string = "Guardar";
  machineList: Machines[] = [];

  constructor(
    private currentModal: MatDialogRef<ModalMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public machineData: Machines,
    private formBuilder: FormBuilder,
    private _machinesService: MachinesService,
    //private _userService: UserService    add the services for the relations
  ) { 
    this.machineForm = this.formBuilder.group({
      Machines_Name: ['', Validators.required],
      Brand: [],
      Serial_Number: [],
      Status: [],
      Acquisition_Date: [],
      Maintenance_Date: [],
      Next_Maintenance_Date: [],
      Top_Aux: [],
      Usuario: [],
      IdUsuario: []
    });

    if (this.machineData != null) {
      this.actionTitle = "Editar";
      this.actionButton = "Actualizar";
    } else {
      throw new Error(
        'Error in class: ModalMachineComponent'
        +Error
      );
    }

    this._machinesService.getMachinesList().subscribe({
      next: (data) => {
        if ( data.status) this.machineList = data.value
      },
      error: (e) => { console.error(e) }
    })
  }

  ngOnInit(): void { // change in the futurej
    this.machineForm.patchValue({
      machinesName : this.machineData.machines_Name,
      brand : this.machineData.brand,
      serialNumber : this.machineData.serial_Number,
      AcquisitionDate : this.machineData.acquisition_Date,
      maintenanceDate : this.machineData.maintenance_Date,
      nextMaintenanceDate : this.machineData.next_Maintenance_Date,
      usuario : this.machineData.id_Usuario
    })
  }

   savePatchMachines() {

    const _machine: Machines = {
      id_Machines: this.machineData == null ? 0 : this.machineData.id_Machines,
      machines_Name: this.machineForm.value.Machines_Name,
      brand: this.machineForm.value.Brand,
      serial_Number: this.machineForm.value.Serial_Number,
      acquisition_Date: this.machineForm.value.Acquisition_Date,
      maintenance_Date : this.machineForm.value.maintenance_Date,
      next_Maintenance_Date : this.machineForm.value.next_Maintenance_Date,
      usuario : this.machineData.id_Usuario,
      id_Usuario: this.machineForm.value.IdUsuario,
      status: this.machineForm.value.status,
      top_Aux: this.machineForm.value.Top_Aux
    }
   }

}

