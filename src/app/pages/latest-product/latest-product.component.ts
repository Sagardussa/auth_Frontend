import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from "../../pipes/search-product.pipe";

@Component({
    selector: 'app-latest-product',
    standalone: true,
    templateUrl: './latest-product.component.html',
    styleUrl: './latest-product.component.css',
    imports: [CommonModule, RouterModule, FormsModule, SearchProductPipe]
})
export class LatestProductComponent {
  // searchname:any

  data: any;
  productsService = inject(ProductsService);
  productData: any = [];
  searchKey: string = '';

  constructor() {}

 

  ngOnInit(): void {
    this.productsService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log("searchKey ngOnInit",this.searchKey);
      
    });

    this.productsService.getproductData()?.subscribe({
      next: (res) => {
        console.log('res', res.data);
        this.productData = res.data;
      },
      error: (err) => {
        console.log('errr', err);

        alert(err.error);
      },
    });
  }

  addToCart(item: any) {
    console.log('item', item);
  }
}
