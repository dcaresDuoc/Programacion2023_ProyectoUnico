import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  searchTerm: string = '';
  viewCart: boolean = false;



  ngOnInit() {
    this.headerElement = this.elementRef.nativeElement.querySelector('.header');
    
  }

  constructor(private elementRef: ElementRef, private productService: ProductService, private authService: AuthService) {
    const usernameFromLocalStorage = localStorage.getItem('Username');
    this.username = usernameFromLocalStorage ? usernameFromLocalStorage.toString() : '';
  }

  username: String = '';

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  obtenerDatosEncabezado(event: any) {
    const valor = event.target.value;
    if (valor) {
      this.productService.enviarDatosHeader(valor);
    }
  }


  onToggleCart(){
    this.viewCart = !this.viewCart
  }

  myCart$ = this.productService.myCart$


  showPopup1: boolean = false;
  showPopup2: boolean = false;
  showPopup3: boolean = false;
  lastOpenedPopup: string = '';


  openPopup(popup: string) {

    if (popup === this.lastOpenedPopup) {
      this.closePopup(popup);
      this.lastOpenedPopup = '';
      return;
    }

    if (popup === 'popup1') {
      this.showPopup1 = true;
      this.showPopup2 = false; // Cierra el popup2
      this.showPopup3 = false;
    } else if (popup === 'popup2') {
      this.showPopup1 = false; // Cierra el popup1
      this.showPopup2 = true;
      this.showPopup3 = false;
    } else if (popup === 'popup3'){
      this.showPopup1 = false; // Cierra el popup1
      this.showPopup2 = false;
      this.showPopup3 = true;
    }
    this.lastOpenedPopup = popup;
  }
  
  closePopup(popup: string) {
    if (popup === 'popup1') {
      this.showPopup1 = false;
    } else if (popup === 'popup2') {
      this.showPopup2 = false;
    } else if (popup === 'popup3') {
      this.showPopup3 = false;
    }
  }


    convertImagePath(imagePath: string): string {
      const basePath = 'C:\\Users\\Manolo\\Documents\\GitHub\\trabajando_pagina\\src\\assets\\img\\tienda\\';
      const relativePath = '../../../assets/img/tienda/';
      return imagePath.replace(basePath, relativePath);
    }
  


  // Animacion scroll header

  initialTopPosition: number = 0;
  previousScrollPosition: number = 0;
  headerElement!: HTMLElement;
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const currentScrollPosition = window.pageYOffset;
      const scrollDifference = currentScrollPosition - this.previousScrollPosition;
      if (scrollDifference > 0) {
        this.initialTopPosition = Math.max(-this.headerElement.offsetHeight, this.initialTopPosition - scrollDifference);
      } else {
        this.initialTopPosition = Math.min(0, this.initialTopPosition - scrollDifference);
      }
      this.headerElement.style.top = `${this.initialTopPosition}px`;
      this.previousScrollPosition = currentScrollPosition;
    }

  }