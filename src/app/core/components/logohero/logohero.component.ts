import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logohero',
  templateUrl: './logohero.component.html',
  styles: [`
  
  .logo-hero {
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

  `]
})
export class LogoheroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
