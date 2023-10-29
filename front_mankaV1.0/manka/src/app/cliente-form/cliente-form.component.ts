import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/Cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  cliente: Cliente = new Cliente();
  isEditing: boolean = false;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Obtén el ID del cliente de la URL
      if (!isNaN(id)) {
        // Si hay un ID en la URL, estás en modo de edición
        this.isEditing = true;
        this.clienteService.getClienteById(id).subscribe((cliente: Cliente) => {
          this.cliente = cliente; // Asigna el cliente al campo "cliente"
          console.log(this.cliente.clieteid); // Agrega esta línea
        });
      }
    });
  }
  

  guardarCliente() {
    if (this.isEditing) {
      this.clienteService.editarCliente(this.cliente).subscribe(response => {
        console.log('Cliente editado con éxito', response);
      }, error => {
        console.error('Error al editar el cliente', error);
      });
    } else {
      this.clienteService.crearCliente(this.cliente).subscribe(response => {
        console.log('Cliente creado con éxito', response);
      }, error => {
        console.error('Error al crear el cliente', error);
      });
    }
  }

  editarCliente() {
  this.clienteService.editarCliente(this.cliente).subscribe(response => {
    console.log('Cliente editado con éxito', response);
    // Resto de tu lógica
  }, error => {
    console.error('Error al editar el cliente', error);
  });
}
  

  cancelarEdicion() {
    this.isEditing = false;
    this.cliente = new Cliente();
  }
}