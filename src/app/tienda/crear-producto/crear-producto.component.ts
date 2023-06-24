import { Component } from '@angular/core';
import { Category, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
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

  constructor(private productService: ProductService) { }

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
  previewData: any; // Variable para almacenar los datos de la vista previa



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


  saveProduct(): void {
    if (!this.selectedImage) {
      console.log('No se ha seleccionado ninguna imagen.');
      return;
    }
  
    Swal.fire({
      icon: 'warning',
      title: 'Confirmar creación',
      text: '¿Estás seguro de crear este producto?',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.saveProduct(this.product, this.selectedImage!).subscribe(
          response => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Producto creado',
              text: 'El producto se ha creado exitosamente.',
              confirmButtonText: 'Aceptar'
            });
            setTimeout(() => {
              window.location.reload();
            }, 1300);
          },
          error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Error al crear el producto',
              text: 'Ha ocurrido un error al crear el producto. Por favor, intenta nuevamente.',
              confirmButtonText: 'Aceptar'
            });
          }
        );
      }
    });
  }
}