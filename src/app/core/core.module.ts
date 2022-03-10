import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityGuard } from './guard/security.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token-interceptor';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoheroComponent } from './components/logohero/logohero.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CardUserComponent } from './components/card-user/card-user.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent, LogoheroComponent, CardUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [ToolbarComponent, NavbarComponent, LogoheroComponent, CardUserComponent],
  providers: [
    HttpService,
    SecurityGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }
