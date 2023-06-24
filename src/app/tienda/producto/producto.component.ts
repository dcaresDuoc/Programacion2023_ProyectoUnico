import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/models/product.model';
import { ProductResponse } from 'src/app/models/productResponse.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productId: number = 0;

  product: Product = {
    id: 0,
    nombre: '',
    descripcion: '',
    marca: '',
    precio: 0,
    imagen: '',
    categoria: [],
    stock: 0,
    oferta: false,
    cantidad: 0
  };

  categories: Category[] = [
    { id: 1, name: 'HARDWARE' },
    { id: 2, name: 'JUEGOS' },
    { id: 3, name: 'PCS' },
    { id: 4, name: 'CELULARES' },
    { id: 5, name: 'ACCESORIOS' },
    { id: 6, name: 'MONITORES' },
    { id: 7, name: 'NOTEBOOKS' }
  ];

  produc: Product = {
    id: 0,
    nombre: '',
    descripcion: '',
    marca: '',
    precio: 0,
    imagen: '',
    categoria: [],
    stock: 0,
    oferta: false,
    cantidad: 0
  };
  

  addToCart(producto : Product){
    return this.productService.addProduct(producto);
  }

  constructor(private productService: ProductService, private route: ActivatedRoute) 
  {this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductDetails();

}

getProductDetails(): void {
  this.productService.buscarProductoPorId(this.productId).subscribe(
    (response: ProductResponse) => {
      this.product = {
        id: response.id,
        nombre: response.nombre,
        descripcion: response.descripcion,
        precio: +response.precio,
        marca: response.marca,
        imagen: response.imagen,
        stock: response.stock,
        oferta: response.oferta,
        categoria: response.category.map(category => category.name),
        cantidad:0
      };
    },
    error => {
      console.error('Error al buscar el producto:', error);
    }
  );
}


convertImagePath(imagePath: string): string {
  const basePath = 'C:\\Users\\Manolo\\Documents\\GitHub\\trabajando_pagina\\src\\assets\\img\\tienda\\';
  const relativePath = '../../../assets/img/tienda/';
  return imagePath.replace(basePath, relativePath);
}


}