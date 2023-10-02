import { Injectable } from '@angular/core';
// importaciones para consumir la api
import {HttpClient} from"@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Usuario } from '../Interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
