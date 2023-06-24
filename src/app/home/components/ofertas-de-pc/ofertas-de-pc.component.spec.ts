import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasDePcComponent } from './ofertas-de-pc.component';

describe('OfertasDePcComponent', () => {
  let component: OfertasDePcComponent;
  let fixture: ComponentFixture<OfertasDePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasDePcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasDePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
