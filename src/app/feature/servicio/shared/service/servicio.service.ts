import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { MejorUsuario } from '../model/mejor-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<MejorUsuario[]>(`${environment.endpoint}/servicios/buscar-mejores`, this.http.optsName('consultar mejores usuarios'));
  }

  // public guardar(producto: MejorUsuario) {
  //   return this.http.doPost<MejorUsuario, boolean>(`${environment.endpoint}/productos`, producto,
  //                                               this.http.optsName('crear/actualizar productos'));
  // }

  // public eliminar(producto: MejorUsuario) {
  //   return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
  //                                                this.http.optsName('eliminar productos'));
  // }
}
