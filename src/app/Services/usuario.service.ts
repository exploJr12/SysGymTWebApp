import { Injectable } from '@angular/core';
// importaciones para consumir la api
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Usuario } from '../Interfaces/usuario';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlApi: string = environment.endpoint + 'Usuario';
  constructor(private http: HttpClient) {}
  iniciarSesion(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`, request);
  }
  listaUsuario(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}listaUSuario`);
  }
  guardarUsuario(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}guardarUsuario`, request);
  }
  editarUsuario(request: Login): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlApi}editarUsuario`, request);
  }
  eliminarUsuario(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlApi}eliminarUsuario/${id}`);
  }
}
