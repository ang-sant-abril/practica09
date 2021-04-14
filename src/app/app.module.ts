import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { CrearProveedorComponent } from './proveedores/crear-proveedor/crear-proveedor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProveedoresComponent,
    CrearProveedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
