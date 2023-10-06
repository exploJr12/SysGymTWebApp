import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Machines } from '../Interfaces/machines';
@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  private readonly API_URL: string = environment.endpoint + "/machines";

  constructor(private http: HttpClient) { }

  getMachinesList(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.API_URL}/machines`);
  }

  getByIdMachine(id: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.API_URL}/${id}`);
  }
   
  createMachine(request: Machines): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.API_URL}`,request); 
  }
  //add modifie
  updateMachine(request: Machines, id: number) : Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.API_URL}/${id}`,request);
  }

  deleteMachine(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.API_URL}/${id}`);
  }
}