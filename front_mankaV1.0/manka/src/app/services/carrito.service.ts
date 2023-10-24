import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  carrito: any[] = [];



  agregarAlCarrito(producto: any, cantidad: number) {
    this.carrito.push({ producto, cantidad });
  }

  limpiarCarrito() {
    this.carrito = [];
  }

  constructor() { }
}
