import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export default class CartComponent implements OnInit {
  showData: any = true;
  router = inject(Router);
  cartService = inject(CartService);
  cartProduct: any = [];
  userCartId: any;
  route = inject(ActivatedRoute);
  finalTotal: any;

  ngOnInit(): void {
    // let getUserID = this.route.snapshot.paramMap.get('userId');
    // console.log('getUserID', getUserID);
    // this.userCartId = getUserID;
    this.loadCart();
  }

  showhide() {
    // console.log('show', this.showData);
    this.showData = false;
    if (!this.showData) {
      // this.router.navigate(['products']);
      this.userCartId
        ? this.router.navigate(['products'])
        : this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

  loadCart() {
    let userId = localStorage.getItem('user_id');
    this.userCartId = userId;
    // console.log('getUserID loadCart', this.userCartId);

    this.cartService.getAllCarts(this.userCartId).subscribe((data) => {
      console.log('data', data.data);
      this.cartProduct = data.data;
        this.finalTotal = this.getgrandTotal();
      // console.log('finalTotal', this.finalTotal);
    });
  }

  getgrandTotal() {
    let grandTotal = 0;
    this.cartProduct.map((a: any) => {
      console.log('a', a);
      grandTotal += a.price * a.Quantity
    });
    // console.log("grandTotal",grandTotal);
    
    return grandTotal;
  }

  removeCart(cartId: any) {
    console.log('id->', cartId);
    this.cartService?.deleteCarts(cartId)?.subscribe((res) => {
      console.log('res->', res);
      if (res.message) {
        alert(res.message);
        this.loadCart();
        this.cartService.cartAddsubject.next(true);
      }
    });
  }
}
