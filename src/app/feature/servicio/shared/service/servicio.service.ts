import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categorias';
import { MejorUsuario } from '../model/mejor-usuario';
import { PreReservaServicio } from '../model/pre-reserva-servicio';
import { RegistroUsuario } from '../model/registro-usuario';
import { ReservaUsuario } from '../model/reservar-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<MejorUsuario[]>(`${environment.endpoint}/servicios/buscar-mejores`, this.http.optsName('consultar mejores usuarios'));
  }

  public registrar(registroUsuario: RegistroUsuario) {
    return this.http.doPost<RegistroUsuario, boolean>(`${environment.endpoint}/servicios/registrar`, registroUsuario,
      this.http.optsName('registrar servicio'));
  }

  public consultarCategorias() {
    return this.http.doGet<Categoria[]>(`${environment.endpoint}/categorias`, this.http.optsName('consultar categorias'));
  }

  public consultarTodos() {
    return this.http.doGet<PreReservaServicio[]>(`${environment.endpoint}/servicios`, this.http.optsName('consultar los servicios'));
  }

  public reservar(reservaUsuario: ReservaUsuario) {
    return this.http.doPost<ReservaUsuario, boolean>(`${environment.endpoint}/servicios/${reservaUsuario.id}/reservar`, reservaUsuario,
      this.http.optsName('reservar servicio'));
  }
  // public eliminar(producto: MejorUsuario) {
  //   return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
  //                                                this.http.optsName('eliminar productos'));
  // }
}
