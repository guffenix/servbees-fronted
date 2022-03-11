import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioService } from '@servicio/shared/service/servicio.service';

import { ReservarServicioComponent } from './reservar-servicio.component';

describe('Reservar Componente Servicio', () => {
  let component: ReservarServicioComponent;
  let fixture: ComponentFixture<ReservarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarServicioComponent],
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear componente reservar', () => {
    expect(component).toBeTruthy();
  });
});
