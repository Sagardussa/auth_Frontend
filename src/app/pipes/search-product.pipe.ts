import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct',
  standalone: true,
})
export class SearchProductPipe implements PipeTransform {
  transform(value: any, searchText: any[]): any {
    if (!searchText) {
      return value;
    }
    return value.filter((it: any) => {
      return (
        it.color.toLocaleLowerCase().includes(searchText) ||
        it.price.toLocaleLowerCase().includes(searchText)
      );
    });
  }
}
