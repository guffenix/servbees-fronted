import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { RegistrarServicioComponent } from './components/registrar-servicio/registrar-servicio.component';
import { ReservarServicioComponent } from './components/reservar-servicio/reservar-servicio.component';
import { CalificarServicioComponent } from './components/calificar-servicio/calificar-servicio.component';
import { DialogComponent } from './components/calificar-servicio/dialog/dialog.component';

@NgModule({
  declarations: [
    ServicioComponent,
    RegistrarServicioComponent,
    ReservarServicioComponent,
    CalificarServicioComponent,
    DialogComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ]
})
export class ServicioModule { }
