import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/models/product.model';
import { ProductResponse } from 'src/app/models/productResponse.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent {

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

  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private productService: ProductService,private route: ActivatedRoute) 
  {this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductDetails();}

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
          cantidad: 0
        };

        const selectedCategoryId = response.category[0]?.id;
        const selectedCategory = this.categories.find(category => category.id === selectedCategoryId);
        this.product.categoria = selectedCategory ? [selectedCategory.name] : [];
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

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    this.previewImage(this.selectedImage!);
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  getPreviewData(): any {
    return {
      nombre: this.product.nombre,
      descripcion: this.product.descripcion,
      marca: this.product.marca,
      precio: this.product.precio,
      imagen: this.imagePreview,
      stock: this.product.stock,
      oferta: this.product.oferta,
      categoria: this.product.categoria.map((categoryId: string) => {
        const category = this.categories.find((cat: Category) => cat.id.toString() === categoryId);
        return category ? category.name : '';
      })
    };
  }

  updateProduct(): void {
    if (!this.selectedImage) {
      console.log('No se ha seleccionado ninguna imagen.');
      return;
    }
    Swal.fire({
      icon: 'warning',
      title: 'Confirmar modificación',
      text: '¿Estás seguro de modificar este producto?',
      showCancelButton: true,
      confirmButtonText: 'Modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.actualizarProducto(this.productId, this.product, this.selectedImage!).subscribe(
          response => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Producto modificado',
              text: 'El producto se ha modificado exitosamente.',
              confirmButtonText: 'Aceptar'
            });
            setTimeout(() => {
              window.location.reload();
            }, 1300); // Esperar 1.5 segundos y recargar la página
          },
          error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Error al modificar el producto',
              text: 'Ha ocurrido un error al modificar el producto. Por favor, intenta nuevamente.',
              confirmButtonText: 'Aceptar'
            });
          }
        );
      }
    });
  }
}