import { Component, OnInit } from '@angular/core';
import { RegistroReserva } from '@servicio/shared/model/registro-reserva';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CalificaServicio } from '@servicio/shared/model/calificar-servicio';

@Component({
  selector: 'app-calificar-servicio',
  templateUrl: './calificar-servicio.component.html',
  styleUrls: ['./calificar-servicio.component.scss']
})
export class CalificarServicioComponent implements OnInit {

  nivelSatisfaccion: string;
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4'];
  status: 'Cargando...' | 'Error' | 'Exitoso' | 'Inicial' = 'Inicial';
  todasMisReservas: RegistroReserva[] = [];
  estado: string = 'C';
  miIdCliente: number = 1;

  constructor(
    protected servicioService: ServicioService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.obtenerServiciosReservados(this.miIdCliente);
  }


  private calificar(calificaionServicio: CalificaServicio) {

    this.servicioService.calificar(calificaionServicio).subscribe(data => {
      console.log(data)
      this.obtenerServiciosReservados(this.miIdCliente);
      Swal.fire({
        icon: 'success',
        title: `Servicio calificado correctamente.`,
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

  private obtenerServiciosReservados(miIdCliente) {
    this.servicioService.consultarMisReservas(miIdCliente).subscribe((todasMisReservas) => {
      this.todasMisReservas = todasMisReservas;
    })
  }

  openDialog(unservicio: RegistroReserva): void {
    const serviciofinal = unservicio;

    const unServicioCalificado: CalificaServicio = {
      estado: this.estado,
      id: unservicio.idReserva,
      nivelSatisfacion: ""
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: serviciofinal,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', this.nivelSatisfaccion);
      this.nivelSatisfaccion = result;
      if (this.nivelSatisfaccion !== '' && this.nivelSatisfaccion !== null && this.nivelSatisfaccion !== undefined) {

        console.log("listo para enviar ", this.nivelSatisfaccion)

        unServicioCalificado.nivelSatisfacion = this.nivelSatisfaccion;

        console.log(">>>> ", unServicioCalificado)

        this.calificar(unServicioCalificado);
      }
    });
  }

}
