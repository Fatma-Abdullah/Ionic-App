import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  catList: any;
  // singleCategory: SingleCategoryPage;

constructor(private catServ: CategoriesService, private router: Router) { }

ngOnInit() {
  this.getAll();
}
getAll() {
  this.catServ.getAllCategories().subscribe(data => {
    this.catList = data;
    console.log(data);
  });
}
categoryClicked(category) {
  console.log(category);
  this.catServ.currentCategory = category;
  this.router.navigate(['single-category']);
}



}
