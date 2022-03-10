import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreReservaServicio } from '@servicio/shared/model/pre-reserva-servicio';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import Swal from "sweetalert2";

@Component({
  selector: 'app-reservar-servicio',
  templateUrl: './reservar-servicio.component.html',
  styleUrls: ['./reservar-servicio.component.scss']
})
export class ReservarServicioComponent implements OnInit {


  displayedColumns: string[] = ['servicio', 'usuario', 'costo', 'cantidad', 'accion'];

  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';
  servicioForm: FormGroup;

  // categorias: Categoria[] = [];
  todosServicios: PreReservaServicio[] = [];

  unaModalidad = 'PH'; //: 'PH' | 'PD' | 'PS'  = 'PH';
  cantidad: number = 1;
  costo: number = -1;
  estado: string = 'R';
  costoTipo: string = "";

  miIdCliente: number = 1;
  constructor(
    protected servicioService: ServicioService
  ) {

  }

  ngOnInit(): void {
    // this.construirFormularioServicio();
    this.obtenerServiciosDisponibles();
  }

  private construirFormularioServicio(servicioSeleccionado: PreReservaServicio) {
    // console.log(this.costoTipo)
    let valores: string[] = this.costoTipo.split('-');
    this.costo = Number(valores[0]);
    this.unaModalidad = valores[1];

    if (this.cantidad <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Se debe ingresar valores enteros positivos.",
      })
    } else {
      this.servicioForm = new FormGroup({
        id: new FormControl(servicioSeleccionado.idReserva, [Validators.required]),
        idUsuarioCli: new FormControl(this.miIdCliente, [Validators.required]),
        modalidad: new FormControl(this.unaModalidad, [Validators.required]),
        cantidad: new FormControl(this.cantidad, [Validators.required]),
        costo: new FormControl(this.costo, [Validators.required, Validators.min(1)]),
        estado: new FormControl(this.estado, [Validators.required]),

      });
    }

  }

  reservar(servicioSeleccionado: PreReservaServicio) {
    this.construirFormularioServicio(servicioSeleccionado);
    // console.log(">>>", this.servicioForm.value)
    if (this.servicioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Se debe ingresar valores enteros positivos.",
      });

      this.servicioForm.markAllAsTouched();
    } else {
      this.servicioService.reservar(this.servicioForm.value).subscribe(data => {
        console.log(data)
        this.obtenerServiciosDisponibles();
        Swal.fire({
          icon: 'success',
          title: `Servicio reservado correctamente.`,
          showConfirmButton: false,
          timer: 1500
        })
      }, response => {
        this.status = 'Error';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.error.mensaje,
        })
      });
    }

  }

  private obtenerServiciosDisponibles() {
    this.servicioService.consultarTodos().subscribe((todosServicios) => {
      this.todosServicios = todosServicios;
    })
  }

  obtenerModalidad() {
    return this.unaModalidad === 'PH' ? 'HORAS' : this.unaModalidad === 'PD' ? 'DIAS' : 'SEMANAS';
  }

}
