import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionofertasComponent } from './seccionofertas.component';

describe('SeccionofertasComponent', () => {
  let component: SeccionofertasComponent;
  let fixture: ComponentFixture<SeccionofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionofertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
