import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:3000/clientes'

  constructor(private http:HttpClient) { }

  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);

  }
}
