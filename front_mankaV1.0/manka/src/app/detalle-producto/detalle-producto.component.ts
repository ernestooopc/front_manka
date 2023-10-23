import { Component } from '@angular/core';
import { Producto } from '../models/Producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  producto: Producto  = new Producto(); // Declaras una propiedad para el producto

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    // Obtén el ID del producto de la URL
    const productIdParam = this.route.snapshot.paramMap.get('id');
  
    // Verifica si productIdParam no es nulo y es una cadena numérica
    if (productIdParam !== null && !isNaN(Number(productIdParam))) {
      const productId = Number(productIdParam); // Convierte a número
      this.productoService.getProductById(productId).subscribe((producto: Producto) => {
        this.producto = producto; // Asigna el producto al campo "producto"
      });
    } else {
      // Manejar el caso en que el ID no sea válido, por ejemplo, redirigiendo a una página de error.
    }
  }
}
