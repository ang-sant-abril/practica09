import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProveedoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
