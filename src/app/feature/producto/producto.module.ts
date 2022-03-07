import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    BorrarProductoComponent,
    ProductoComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule,
    MatTabsModule,
    MatFormFieldModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
