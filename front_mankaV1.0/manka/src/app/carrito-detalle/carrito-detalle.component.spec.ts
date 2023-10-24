import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDetalleComponent } from './carrito-detalle.component';

describe('CarritoDetalleComponent', () => {
  let component: CarritoDetalleComponent;
  let fixture: ComponentFixture<CarritoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoDetalleComponent]
    });
    fixture = TestBed.createComponent(CarritoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
