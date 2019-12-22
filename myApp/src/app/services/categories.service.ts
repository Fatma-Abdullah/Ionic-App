import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  currentCategory: any;
  currentProduct: any;
  API = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getAllCategories() {
    return this.http.get(this.API);
  }
}
