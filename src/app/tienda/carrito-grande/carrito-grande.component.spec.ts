import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoGrandeComponent } from './carrito-grande.component';

describe('CarritoGrandeComponent', () => {
  let component: CarritoGrandeComponent;
  let fixture: ComponentFixture<CarritoGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
