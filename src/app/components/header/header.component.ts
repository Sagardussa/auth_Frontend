import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  productsService = inject(ProductsService);
  cartService = inject(CartService);
  cartProduct: any = [];

  router = inject(Router);
  searchTerm: string = '';
  searchResult: undefined | any[];
  // route = inject(ActivatedRoute);
  isLoggedIn: boolean = false;
  isSerach: boolean = false;
  userID: any;
  userName: any;

  constructor() {
    this.cartService.cartAddsubject.subscribe((res) => {
      // console.log("res",res);
      this.loadCart();
    });
  }

  ngOnInit(): void {
    // let userId = localStorage.getItem('user_id');
    // console.log("userId",userId);
    // this.userCartId = userId;
    // let getProductId = this.route.snapshot.paramMap.get('id');
    // console.log('getProductId', getProductId);

    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.loadCart();
      let userName: any = localStorage.getItem('userName');
      // console.log('userName', userName);
      this.userName = userName && JSON.parse(userName);
    });
  }

  shows() {
    this.isSerach = !this.isSerach;
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.productsService.search.next(this.searchTerm);
  }

  Logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('userName');
    this.authService.isLoggedIn$.next(false);
  }

  loadCart() {
    let userId = localStorage.getItem('user_id');
    // console.log("userId",userId);
    this.userID = userId;
    this.userID &&
      this.cartService.getAllCarts(this.userID).subscribe((data) => {
        // console.log('data', data.data);
        this.cartProduct = data.data;
      });
  }
}
