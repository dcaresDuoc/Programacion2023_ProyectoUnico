import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIntermedioComponent } from './menu-intermedio.component';

describe('MenuIntermedioComponent', () => {
  let component: MenuIntermedioComponent;
  let fixture: ComponentFixture<MenuIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
