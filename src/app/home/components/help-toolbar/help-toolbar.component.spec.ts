import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpToolbarComponent } from './help-toolbar.component';

describe('HelpToolbarComponent', () => {
  let component: HelpToolbarComponent;
  let fixture: ComponentFixture<HelpToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
