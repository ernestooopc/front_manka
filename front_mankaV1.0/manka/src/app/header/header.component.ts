import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(public carritoService: CarritoService){}
}
