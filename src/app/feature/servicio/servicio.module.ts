import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';



@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    ServicioRoutingModule
  ]
})
export class ServicioModule { }
