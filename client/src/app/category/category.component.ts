import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/ProductService';
import { CategoryData } from '../models/CategoryData';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers : [ProductService]
})
export class CategoryComponent implements OnInit {
   public messagess='pleae enter record';
  data:CategoryData = new CategoryData();
  constructor(private productService : ProductService) { }
  addCategory(){
    this.messagess='Loding...';
   
   // console.log(this.data);
    this.productService.addCategory(this.data).subscribe((res) => {
      console.log(res);
    this.messagess = 'ho gya';
  },(error) => {
      console.log(error.json());
    this.messagess = 'na ho gya';
  }, () => {
            console.log("To Bad");
    })
    
  }
  ngOnInit() {
  }

}
