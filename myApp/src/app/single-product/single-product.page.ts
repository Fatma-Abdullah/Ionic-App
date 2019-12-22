import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  product;

  constructor(private catServ: CategoriesService ) { }

  ngOnInit() {
    this.product = this.catServ.currentProduct;
  }

}
