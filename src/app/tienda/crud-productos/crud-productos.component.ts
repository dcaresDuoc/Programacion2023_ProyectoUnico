import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit {
  products!: any[];

  constructor(private productService: ProductService, private router: Router) { }

  redireccionar(id: number) {
    this.router.navigateByUrl(`/update-producto/${id}`);
  }

  ngOnInit(): void {
    this.loadProducts();
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

  reloadPage(): void {
    location.reload();
  }
  
  deleteProduct(productId: number): void {
    Swal.fire({
      icon: 'warning',
      title: 'Confirmar eliminación',
      text: '¿Estás seguro de eliminar este producto?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.eliminarProducto(productId).subscribe(
          response => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Producto eliminado con éxito!!'
            });
            setTimeout(() => {
              window.location.reload();
            }, 1300);
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar el producto'
            });
            console.log(error);
          }
        );
      }
    });
  }

  convertImagePath(imagePath: string): string {
    const basePath = 'C:\\Users\\Manolo\\Documents\\GitHub\\trabajando_pagina\\src\\assets\\img\\tienda\\';
    const relativePath = '../../../assets/img/tienda/';
    return imagePath.replace(basePath, relativePath);
  }

  getCategoryNames(categories: any[]): string {
    return categories.map(category => category.name).join(', ');
  }

}