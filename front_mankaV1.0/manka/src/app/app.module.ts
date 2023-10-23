import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { HeaderComponent } from './components/header/header.component';
// import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Pagina404Component } from './shared/pagina404.component';
// import { FormComponent } from './components/usuarios/form.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { HeaderComponent } from './header/header.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes:Routes=[
  {path:'catalogo',component:ProductoListComponent},
  { path: 'detalle-producto/:id', component: DetalleProductoComponent }, // Ruta para el Detalle de Producto
  // {path:'404',component:Pagina404Component},
  // {path:'usuario/form',component:FormComponent},
  // {path:'usuario/form/:id',component:FormComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    HeaderComponent,
    DetalleProductoComponent,
    
    
    // UsuariosComponent,
    // Pagina404Component,
    // FormComponent,
      ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
