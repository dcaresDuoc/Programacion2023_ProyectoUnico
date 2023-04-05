import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIntermedioComponent } from './img-intermedio.component';

describe('ImgIntermedioComponent', () => {
  let component: ImgIntermedioComponent;
  let fixture: ComponentFixture<ImgIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
