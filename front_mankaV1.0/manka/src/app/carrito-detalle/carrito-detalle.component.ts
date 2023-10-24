import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent {

  productosEnCarrito: any[]; // Declarar la propiedad para almacenar los productos en el carrito

  constructor(private carritoService: CarritoService,private router: Router) {
    this.productosEnCarrito = carritoService.carrito; // Obtener los productos desde la propiedad carrito en el servicio
  }

  eliminarProducto(item: any) {
    // Buscar el índice del elemento a eliminar
    const index = this.productosEnCarrito.indexOf(item);
    
    if (index !== -1) {
      // Si se encuentra el elemento, eliminarlo
      this.productosEnCarrito.splice(index, 1);
    }
  }

  get precioTotalGlobal() {
    let total = 0;
    for (const item of this.productosEnCarrito) {
      total += item.cantidad * item.producto.prodprecio;
    }
    return total;
  }

  toggleEditing(item: any) {
    if (item.editing) {
      // Guardar la nueva cantidad cuando se está editando
      if (item.cantidadEditada) {
        item.cantidad = item.cantidadEditada;
      }
    }
    item.editing = !item.editing;
  }

  volverAlCatalogo() {
    // Limpia el carrito
    this.carritoService.limpiarCarrito();
    // Navega a la página de catálogo
    this.router.navigate(['/catalogo']);
  }

}