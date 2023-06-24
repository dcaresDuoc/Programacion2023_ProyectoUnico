import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaFilter'
})
export class CategoriaFilterPipe implements PipeTransform {

  transform(products: any[], category: string): any[] {
    if (!category) {
      return products;
    }
    return products.filter(product => product.category.some((cat: any) => cat.name.toLowerCase() === category.toLowerCase()));
  }
}