import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categorias';
import { MejorUsuario } from '../model/mejor-usuario';
import { RegistroUsuario } from '../model/registro-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  constructor(protected http: HttpService) {}

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
  // public eliminar(producto: MejorUsuario) {
  //   return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
  //                                                this.http.optsName('eliminar productos'));
  // }
}
