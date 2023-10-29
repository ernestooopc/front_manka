import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private rutaCliente = 'http://localhost:8091/rest/clientes/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.rutaCliente + 'listarCliente');
  }

  getClienteById(id: number): Observable<Cliente> {
    const url = `${this.rutaCliente}buscarCliente/${id}`;
    return this.http.get<Cliente>(url);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.rutaCliente + 'agregarCliente', cliente, {
      headers: this.httpHeaders
    });
  }

  editarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.rutaCliente}actualizarClie/${cliente.clieteid}`;
    return this.http.put<Cliente>(url, cliente, { headers: this.httpHeaders });
  }
}