import { Component, OnInit, inject } from '@angular/core';
import { LatestProductComponent } from '../latest-product/latest-product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LatestProductComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  showDatas: boolean = false;
  productData: any = [];
  searchTermFashion: any;
  productsService = inject(ProductsService);
  // filterCategory: any = [];
  // CategoryText: any = '';
  // showcheck: any = {
  //   fashion: false,
  //   electron: false,
  //   jewllery: false,
  //   all: false,
  // };

  showData() {
    this.showDatas = !this.showDatas;
  }

  ngOnInit(): void {
    // this.productsService.getproductData()?.subscribe({
    //   next: (res) => {
    //     console.log('res', res.data);
    //     this.productData = res.data;
    //     this.filterCategory = res.data;
    //     this.productData.forEach((a: any) => {
    //       console.log(a);
    //       if (a.category == 'men' || a.category == 'women') {
    //         a.category = 'fashion';
    //       }
    //       Object.assign(a);
    //     });
    //     console.log('productData--> ', this.productData);
    //   },
    //   error: (err) => {
    //     console.log('errr', err);
    //     alert(err.error);
    //   },
    // });
  }

  // filtersdataText(categorys: any) {
  //   console.log('categorys-> ', categorys);

  //   let fashion = !this.showcheck.fashion;
  //   let electron = !this.showcheck.electron;
  //   let jewllery = !this.showcheck.jewllery;
  //   let all = !this.showcheck.all;

  //   console.log('showcheck', this.showcheck);
  //   if (fashion || electron || jewllery || all || categorys == '') {
  //     this.CategoryText = categorys;
  //     this.productsService.textCate.next(this.CategoryText);
  //   }
  // }
}
