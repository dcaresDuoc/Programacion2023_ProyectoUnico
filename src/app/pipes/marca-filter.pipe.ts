import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'marcaFilter'
})
export class MarcaFilterPipe implements PipeTransform {


  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products;
    }

    searchTerm = searchTerm.toLowerCase();

    return products.filter((product: Product) => {
      return product.marca.toLowerCase().includes(searchTerm);
    });
  }

}
