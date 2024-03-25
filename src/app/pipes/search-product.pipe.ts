import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproduct',
  standalone: true,
})
export class SearchProductPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName?: string): any {
    const result: any = [];
    if (!value || filterString == '' || propName == '') {
      return value;
    }
    return value.filter(
      (item: any) =>
        item.productName.toLowerCase().indexOf(filterString.toLowerCase()) >
          -1 ||
        item.color.toLowerCase().indexOf(filterString.toLowerCase()) > -1
    );
    // value.forEach((a: any) => {
    //   if (
    //     a[propName].trim().toLowerCase().includes(filterString.toLowerCase())
    //   ) {
    //     result.push(a);
    //   }
    // });
    // return result;
  }
}
