import { Component, OnInit } from '@angular/core';
import { MejorUsuario } from '@servicio/shared/model/mejor-usuario';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  public listaMejoresUsuarios: Observable<MejorUsuario[]>;

  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listaMejoresUsuarios = this.servicioService.consultar();
  }
}
