import { Component, OnInit } from '@angular/core';
import { ProductData } from '../models/ProductData';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent{
  
  data:ProductData = new ProductData();
  constructor(private productService : ProductService){}
  addProducts(){
    console.log(this.data);
    this.productService.addProduct(this.data).subscribe(function(res){
        console.log(res);
    })
  }
  
}