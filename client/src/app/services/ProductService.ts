import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductData } from './../models/ProductData';
import { CategoryData } from './../models/CategoryData';
@Injectable()
export class ProductService{
    constructor(private http : Http){}

    addProduct(data:ProductData){
        return this.http.post('http://127.0.0.1:1337/products',data).map(response => response.json());
    }
    addCategory(data:CategoryData){
        return this.http.post('http://127.0.0.1:1337/category',data).map(response => response.json());
    }
    
}