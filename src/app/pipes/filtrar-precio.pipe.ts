import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filtrarPrecio'
})
export class FiltrarPrecioPipe implements PipeTransform {

  transform(productos: Product[], precioMinimo: number, precioMaximo: number): Product[] {
    // Verificar si se han proporcionado los valores de precio mínimo y máximo
    if (precioMinimo === null || precioMaximo === null) {
      return productos;
    }

    // Filtrar los productos por rango de precios
    return productos.filter(producto =>
      producto.precio >= precioMinimo && producto.precio <= precioMaximo
    );
  }
}