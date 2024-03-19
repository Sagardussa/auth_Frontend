import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

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
  router = inject(Router);
  searchname: string = '';
  searchResult: undefined | any[];
  // route = inject(ActivatedRoute);
  isLoggedIn: boolean = false;
  isSerach: boolean = false;



  ngOnInit(): void {
    // let getProductId = this.route.snapshot.paramMap.get('id');
    // console.log('getProductId', getProductId);
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }

  shows() {
    this.isSerach = !this.isSerach;
  }
  Logout() {
    localStorage.removeItem('user_id');
    this.authService.isLoggedIn$.next(false);
  }
}
