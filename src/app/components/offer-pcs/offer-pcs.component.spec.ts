import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPcsComponent } from './offer-pcs.component';

describe('OfferPcsComponent', () => {
  let component: OfferPcsComponent;
  let fixture: ComponentFixture<OfferPcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferPcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
