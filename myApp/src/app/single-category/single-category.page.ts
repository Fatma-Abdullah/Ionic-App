import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {

  category;
  constructor(private catServ: CategoriesService , private router: Router) { }

  ngOnInit() {
    this.category = this.catServ.currentCategory;
  }
  productClicked(product) {
    this.catServ.currentProduct = product;
    this.router.navigate(['single-product']);
  }
}
