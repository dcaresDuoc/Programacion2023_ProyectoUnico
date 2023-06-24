import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  isRedirectedFromCart: boolean = false;

  constructor(private productService: ProductService){
  }

  convertImagePath(imagePath: string): string {
    const basePath = 'C:\\Users\\Manolo\\Documents\\GitHub\\trabajando_pagina\\src\\assets\\img\\tienda\\';
    const relativePath = '../../../assets/img/tienda/';
    return imagePath.replace(basePath, relativePath);
  }

  totalProduct(price:number, units:number){
    return price * units
  }

  deleteFromCarrito(id:number){
    this.productService.deleteFromCarrito(id);
  }

  updateUnits(operations:string, id:number){
    const product = this.productService.findProductById(id)
    if(product){
      if(operations === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operations === 'add'){
        product.cantidad= product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.deleteFromCarrito(id);
      }
    }
  }

  totalCart(){
    const result = this.productService.totalCart();
    return result
  }

  convertToInt(value: string): number {
    return parseInt(value, 10);
  }

  myCart$ = this.productService.myCart$


}
