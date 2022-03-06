import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoheroComponent } from './logohero.component';

describe('LogoheroComponent', () => {
  let component: LogoheroComponent;
  let fixture: ComponentFixture<LogoheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
