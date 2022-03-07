import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`
  .nav-container {
    border-bottom: 1px solid #e1e1e1;
    /* border-bottom-width: 1px; */
    /* display: block; */
    height: 48px;
  }
  
  nav {
    padding: 0 16px;
    /* background-color: #F3F2F2; */
  }
  
  nav a {
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
