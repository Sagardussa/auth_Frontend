import { Component, Input, OnInit, inject } from '@angular/core';
import { FeaturedArticlesComponent } from '../featured-articles/featured-articles.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FeaturedArticlesComponent, CategoriesComponent,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent implements OnInit {
  productsService = inject(ProductsService);
  productData: any = [];

  // @Input()
  // searchDatas:any=""

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.productsService.getproductData().subscribe((res) => {
    //   console.log('res', res);
    // });

    this.productsService.getproductData()?.subscribe({
      next: (res) => {
        // console.log('res', res.data);
        this.productData = res.data;
      },
      error: (err) => {
        console.log("errr",err);
        
        alert("getproductData is Fail");
      },
    });
  }
}
