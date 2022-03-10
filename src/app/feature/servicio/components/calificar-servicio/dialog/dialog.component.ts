import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistroReserva } from '@servicio/shared/model/registro-reserva';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [`
  .radio-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.mat-card:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
  `  ]
})
export class DialogComponent implements OnInit {


  nivelSatisfacion = '';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegistroReserva,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
