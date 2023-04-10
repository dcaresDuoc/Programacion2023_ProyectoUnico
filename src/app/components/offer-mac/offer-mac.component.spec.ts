import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMacComponent } from './offer-mac.component';

describe('OfferMacComponent', () => {
  let component: OfferMacComponent;
  let fixture: ComponentFixture<OfferMacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferMacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
