import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Interfaces/login';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioServicio: UsuarioService,
    private _utilidadServicio: UtilidadService
  ) {
    this.formularioLogin = this.fb.group({
      Login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  iniciarSesion() {
    this.mostrarLoading = true;

    const request: Login = {
      login: this.formularioLogin.value.login,
      password: this.formularioLogin.value.password,
    };

    this._usuarioServicio.iniciarSesion(request).subscribe({
      next: (data) => {
        if (data.status) {
          this._utilidadServicio.guardarSesionUsuario(data.value);
          this.router.navigate(['pages']);
        } else {
          this._utilidadServicio.mostrarAlerta(
            'No se encontraron coincidencias',
            'Opps!'
          );
        }
      },
      complete: () => {
        this.mostrarLoading = false;
      },
      error: () => {
        this._utilidadServicio.mostrarAlerta(
          'Credenciales incorrenctas, intente de nuevo por favor ',
          'Opps!'
        );
      },
    });
  }
}
