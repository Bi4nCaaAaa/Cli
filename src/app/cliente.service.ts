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
  save(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.url, cliente);
  }
  delete(cliente: Cliente): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cliente.id}`);
  }
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`,cliente);
  }
}
