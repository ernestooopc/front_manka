import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private rutaProducto = "http://localhost:8091/rest/productos/"
  private httpHeaders = new HttpHeaders({"content-Type":"application/json"});
  


  constructor(private http:HttpClient, private router:Router) {

  }

    getProducto():Observable<Producto[]>{
      return this.http.get<Producto[]>(this.rutaProducto + 'listarProduc')
    }

    getProductById(id: number): Observable<Producto> {
      const url = `${this.rutaProducto}buscarProduc/${id}`; // Ajusta la URL de la API según tu estructura
      return this.http.get<Producto>(url);
    }

   }
