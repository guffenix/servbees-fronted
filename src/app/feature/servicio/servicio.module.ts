import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    ServicioRoutingModule,
    MatButtonModule
  ]
})
export class ServicioModule { }
