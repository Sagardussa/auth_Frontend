import { Component, OnInit, inject } from '@angular/core';
import { FeaturedArticlesComponent } from '../featured-articles/featured-articles.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FeaturedArticlesComponent, CategoriesComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  productDetails: any = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let getProductId = this.route.snapshot.paramMap.get('id');
    console.log('getProductId', getProductId);
    getProductId &&
      this.productsService.getProductById(getProductId).subscribe((data) => {
        this.productDetails = data.data;
        console.log("this.productDetails",this.productDetails);
        
      });
  }
}
