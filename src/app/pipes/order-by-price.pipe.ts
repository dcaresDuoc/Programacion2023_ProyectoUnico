import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPrice'
})
export class OrderByPricePipe implements PipeTransform {

  transform(products: any[], order: string): any[] {
    if (order === 'asc') {
      return products.sort((a, b) => a.precio - b.precio);
    } else if (order === 'desc') {
      return products.sort((a, b) => b.precio - a.precio);
    }
    return products;
  }
}