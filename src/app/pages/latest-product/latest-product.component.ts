import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from '../../pipes/search-product.pipe';

@Component({
  selector: 'app-latest-product',
  standalone: true,
  templateUrl: './latest-product.component.html',
  styleUrl: './latest-product.component.css',
  imports: [CommonModule, RouterModule, FormsModule, SearchProductPipe],
})
export class LatestProductComponent {
  // searchname:any

  data: any;
  productsService = inject(ProductsService);
  productData: any = [];

  searchKey: string = '';
  // @Input()
  // CategoryText: any = '';
  filterCategorys: any = [];

  constructor() {}

  ngOnInit(): void {
    // console.log('CategoryTextngOnInit-> ', this.CategoryText);
    // console.log('filterCategorys ngOnInit-> ', this.filterCategorys);
    this.productsService.textCate.subscribe((res) => {
      // console.log('res--> ', res);
      this.filterCategorys = res;
      console.log('filterCategorys ngOnInit-> ', this.filterCategorys);
      this.filtersdata(this.filterCategorys);
    });

    this.productsService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log('searchKey ngOnInit', this.searchKey);
    });

    this.productsService.getproductData()?.subscribe({
      next: (res) => {
        // console.log('res', res.data);
        this.productData = res.data;

        this.filterCategorys = res.data;
        this.productData.forEach((a: any) => {
          // console.log(a);
          if (a.category == 'men' || a.category == 'women') {
            a.category = 'fashion';
          }
          Object.assign(a);
        });
        console.log('productData--> ', this.productData);
      },
      error: (err) => {
        console.log('errr', err);

        alert(err.error);
      },
    });
  }

  filtersdata(categorys: any) {
    console.log("categorys",categorys);
    
    this.filterCategorys = this.productData.filter((a: any) => {
      console.log('a', a);
      if (a.category == categorys || categorys == ' ') {
        return a;
      }
    });
  }

  
}
