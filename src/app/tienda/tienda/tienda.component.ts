import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  datosEncabezado!: string;
  products!: any[];
  category!: any[];
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedOrder!: string;
  precioMinimo: number=0;
  precioMaximo: number=100000000;



  getUniqueMarcas() {
    const marcas = this.products.map(product => product.marca);
    return marcas.filter((marca, index) => marcas.indexOf(marca) === index);
  }

  getUniqueCategories(): string[] {
    const categoriesSet = this.products.reduce((set: Set<string>, product: any) => {
      product.category.forEach((category: { name: string }) => set.add(category.name));
      return set;
    }, new Set<string>());

    return Array.from(categoriesSet);
  }


  redireccionar(id: number) {
    this.router.navigateByUrl(`/producto/${id}`);
  }

  loadProducts(): void {
    this.productService.obtenerTodosProductos().subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  convertToInt(value: any): number {
    return parseInt(value, 10);
  }

  convertToString(value: number): String{
    return value.toString();
  }


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
    this.productService.headerData$.subscribe(data => {
      this.datosEncabezado = data;
    });
  }

  convertImagePath(imagePath: string): string {
    const basePath = 'C:\\Users\\Manolo\\Documents\\GitHub\\trabajando_pagina\\src\\assets\\img\\tienda\\';
    const relativePath = '../../../assets/img/tienda/';
    return imagePath.replace(basePath, relativePath);
  }


  addToCart(producto : Product){
    return this.productService.addProduct(producto);
  }



}

