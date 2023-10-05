// src/app/services/rol.service.ts

import { Injectable } from '@angular/core';
// importaciones para consumir la api
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Rol } from '../Interfaces/rol';
//import { ResponseApi } from '../interfaces/response-api';
//import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private urlApi: string = environment.endpoint + 'rol/';

  constructor(private http: HttpClient) {}
}
