import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private miIdPersonal: number = 0;
  private experienciaValida: boolean = false;

  constructor() { }

  guardarId(nuevoId: number){
    this.miIdPersonal = nuevoId;
  }

  obtenerId(){
    return this.miIdPersonal;
  }

  guardarExperiencia(nuevaExp: boolean){
    this.experienciaValida = nuevaExp;
  }

  obtenerExperiencia(){
    return this.experienciaValida;
  }

}
