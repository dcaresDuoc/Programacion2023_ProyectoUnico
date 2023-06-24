import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    });
  }

}
