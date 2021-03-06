import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '@producto/shared/model/usuario';

import Swal from "sweetalert2";

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  title: String = "ServBees";
  usuarioValidador: Usuario = {
    nombre: "",
    clave: ""
  }
  identificacion = 0;
  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  cerar() {
    
    this.productoServices.guardar(this.productoForm.value);
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

  ingresar() {
    this.status = 'Cargando...';
    // sample
    Swal.fire({
      icon: 'success',
      title: `Bienvenido ${this.identificacion}`,
      showConfirmButton: false,
      timer: 1500
    });
    console.log(">>>",this.productoForm.value)

  }

}
