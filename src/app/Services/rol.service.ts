// src/app/services/rol.service.ts

import { Injectable } from '@angular/core';
// importaciones para consumir la api
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private readonly API_URL: string = environment.endpoint + '/rol';

  constructor(private http: HttpClient) {}

  getRolList(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.API_URL}/rol`);
    console.log(this.getRolList);
  }

  getByIdRol(id: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.API_URL}/${id}`);
  }

  createRol(request: Rol): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.API_URL}`, request);
  }
  //add modifie
  updateRol(request: Rol, id: number): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.API_URL}/${id}`, request);
  }

  deleteRol(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.API_URL}/${id}`);
  }
}
