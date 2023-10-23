import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit{

  producto:Producto[]=[]
  productGroups: Producto[][] = [];
  constructor(private productoService: ProductoService){        
  }

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(
      (producto) => {
        this.producto = producto;
      }
    );
  }

  
}
