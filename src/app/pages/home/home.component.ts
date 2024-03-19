import { Component, OnInit } from '@angular/core';
import { LatestProductComponent } from '../latest-product/latest-product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LatestProductComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  showDatas: boolean = false;

  showData() {
    // console.log('show', this.showDatas);

    this.showDatas = !this.showDatas;
  }

  ngOnInit(): void {}


}
