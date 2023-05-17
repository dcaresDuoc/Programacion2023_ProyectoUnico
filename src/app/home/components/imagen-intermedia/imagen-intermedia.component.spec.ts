import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenIntermediaComponent } from './imagen-intermedia.component';

describe('ImagenIntermediaComponent', () => {
  let component: ImagenIntermediaComponent;
  let fixture: ComponentFixture<ImagenIntermediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenIntermediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenIntermediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
