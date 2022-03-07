import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logohero',
  templateUrl: './logohero.component.html',
  styles: [`
  
  .logo-hero {
    padding-top: 30px;
    display: flex;
  } 

  .logohero-title {
    font-size: 96px;
    color: #414042;
  }

  .centrado {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin: 0px;
    padding: 0px;
  }

  .full-width {
    width: 100%;
  }
  
  .search-box {
    width: 500px;
  }

  .logo-and-search {
    display: flex;
    flex-direction: column;
  }

  .centrado-arriba {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .mat-fab.mat-primary {
    border-radius: 5px;
  }
  `]
})
export class LogoheroComponent implements OnInit {

  value:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
