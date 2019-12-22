import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import {  CategoryPage} from '../category/category.page';
import {  CategoriesPage} from '../categories/categories.page';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  splash = true;

  CategoriesPage: CategoriesPage;

  constructor(public navCtrl: NavController , public router: Router) {}
  ionViewDidLoad() {
    setTimeout(() => this.splash = false
    , 1000
    );
  }

  homeClicked() {
    // this.navCtrl.setRoot(CategoryPage);
    this.router.navigate(['categories']);
  }

}
