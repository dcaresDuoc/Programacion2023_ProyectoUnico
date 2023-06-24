import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasMacComponent } from './ofertas-mac.component';

describe('OfertasMacComponent', () => {
  let component: OfertasMacComponent;
  let fixture: ComponentFixture<OfertasMacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasMacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
