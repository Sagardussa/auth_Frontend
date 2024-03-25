import { Component, Input, OnInit, inject } from '@angular/core';
import { FeaturedArticlesComponent } from '../featured-articles/featured-articles.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchProductPipe } from '../../pipes/search-product.pipe';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [
    CommonModule,
    FeaturedArticlesComponent,
    CategoriesComponent,
    RouterModule,
    SearchProductPipe,
  ],
})
export default class ProductListComponent implements OnInit {
  productsService = inject(ProductsService);
  cartService = inject(CartService);

  productData: any = [];
  cartObj: any = {
    ProductId: '',
    Quantity: 1,
    userId: '',
  };
  searchKey: string = '';
  filterCategory: any = [];
  productQuantity: number = 1;

  ngOnInit(): void {
    let userId = localStorage.getItem('user_id');

    this.productsService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log('searchKey ngOnInit', this.searchKey);
    });

    this.productsService.getproductData()?.subscribe({
      next: (res) => {
        this.productData = res.data;
        this.filterCategory = res.data;
        this.productData.forEach((a: any) => {
          // console.log(a);
          if (a.category == 'men' || a.category == 'women') {
            a.category = 'fashion';
          }
          Object.assign(a);
        });
        // console.log('productData--> ', this.productData);
      },
      error: (err) => {
        console.log('errr', err);

        alert('getproductData is Fail');
      },
    });
  }

  handleQuantity(val: string) {
    // console.log('productId--> ', productId);
    if (this.productData) {
      // this.productData.map((a: any) => {
      // console.log(a);
      // if (a._id === productId) {
      if (this.productQuantity < 20 && val === 'plus') {
        this.cartObj.Quantity = this.productQuantity += 1;
      } else if (this.productQuantity > 1 && val === 'min') {
        this.cartObj.Quantity = this.productQuantity -= 1;
      }
      // }
      // });
    }
  }

  // handleQuantity(val: string, productId: any) {
  //   console.log('productId--> ', productId);
  //   if (this.productData) {
  //     this.productData.map((a: any) => {
  //       console.log(a);
  //       if (a._id === productId) {
  //         if ((this.productQuantity < 20 && val === 'plus')) {
  //           this.cartObj.Quantity = this.productQuantity += 1;
  //         } else if (this.productQuantity > 1 && val === 'min') {
  //           this.cartObj.Quantity = this.productQuantity -= 1;
  //         }
  //       }
  //     });
  //   }
  // }

  addtocart(productId: any) {
    let userId = localStorage.getItem('user_id');
    console.log('user', userId);
    this.cartObj.ProductId = productId;
    this.cartObj.userId = userId;
    console.log('cartObj', this.cartObj);

    this.cartService?.addToCarts(this.cartObj)?.subscribe((res) => {
      console.log('res', res);
      if (res.message) {
        alert(res.message);

        this.cartService.cartAddsubject.next(true);
      }
    });
  }

  filtersdata(categorys: any) {
    this.filterCategory = this.productData.filter((a: any) => {
      console.log('a', a);
      if (a.category == categorys || categorys == '') {
        return a;
      }
    });
  }

  // getgrandTotal() {
  //   let grandTotal = 0;
  // }
}
