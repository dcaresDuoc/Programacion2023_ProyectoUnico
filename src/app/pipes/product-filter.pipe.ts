import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products;
    }

    searchTerm = searchTerm.toLowerCase();

    return products.filter((product: Product) => {
      return product.nombre.toLowerCase().includes(searchTerm);
    });
  }
}

