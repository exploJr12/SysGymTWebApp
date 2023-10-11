import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rol } from 'src/app/Interfaces/rol';
import { RolService } from 'src/app/Services/rol.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-rol',
  templateUrl: './modal-rol.component.html',
  styleUrls: ['./modal-rol.component.css'],
})
export class ModalRolComponent {
  formularioRol: FormGroup;
  tituloAccion: string = 'Agregar';
  botonAccion: string = 'Guardar';
  listaRol: Rol[] = [];

  constructor(
    private modalActual: MatDialogRef<ModalRolComponent>,
    @Inject(MAT_DIALOG_DATA) public datosRol: Rol,

    private fb: FormBuilder,
    private _rolService: RolService,
    private _utilidadService: UtilidadService
  ) {
    this.formularioRol = this.fb.group({
      name: ['', Validators.required],
    });

    if (this.datosRol != null) {
      this.tituloAccion = 'Editar';
      this.botonAccion = 'Actualizar';
    }
  }

  ngOnIninit(): void {
    if (this.datosRol != null) {
      this.formularioRol.patchValue({
        name: this.datosRol.name,
      });
    }
  }

  saveEdit_Rol() {
    const _rol: Rol = {
      id_Rol: this.datosRol == null ? 0 : this.datosRol.id_Rol,
      name: this.datosRol.name,
      top_Aux: this.datosRol.top_Aux,
      usuario: this.datosRol.usuario,
    };

    if (this.datosRol == null) {
      this._rolService.createRol(_rol).subscribe({
        next: (data) => {
          if (data.status) {
            this._utilidadService.mostrarAlerta(
              'El rol fue registrado',
              'Exito'
            );
            this.modalActual.close('true');
          } else {
            this._utilidadService.mostrarAlerta(
              'nose pudo registrar el rol',
              'Error'
            );
          }
        },
        error: (e) => {},
      });
    } else {
      this._rolService.updateRol(_rol, _rol.id_Rol).subscribe({
        next: (data) => {
          if (data.status) {
            this._utilidadService.mostrarAlerta(
              'El rol fue actualizado',
              'Exito'
            );
            this.modalActual.close('true');
          } else {
            this._utilidadService.mostrarAlerta(
              'nose pudo editar el rol',
              'Error'
            );
          }
        },
      });
    }
  }
}
