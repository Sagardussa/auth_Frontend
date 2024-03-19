import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-latest-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './latest-product.component.html',
  styleUrl: './latest-product.component.css',
})
export class LatestProductComponent {
  // searchname:any

  data: any;
  productsService = inject(ProductsService);
  productData: any = [];
  
  @Input()
  nameSerach: any;

  constructor() {}

 

  ngOnInit(): void {
    // console.log("nameSerachngOnInit",this.nameSerach);
    // this.data = this.nameSerach

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
        console.log('errr', err);

        alert(err.error);
      },
    });
  }

  addToCart(item: any) {
    console.log('item', item);
  }
}
