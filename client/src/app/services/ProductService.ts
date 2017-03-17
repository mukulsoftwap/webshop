import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductData } from './../models/ProductData';
import { CategoryData } from './../models/CategoryData';
import { LoginData } from '../models/LoginData';
@Injectable()
export class ProductService{
    headers = new Headers();
    constructor(private http : Http){
        this.headers.append("Authorization", "Bearer "+localStorage.getItem('token'));
    }

    addProduct(data:ProductData){
        return this.http.post('http://127.0.0.1:3000/v1/products',data,{headers : this.headers}).map(response => response.json());
    }

    addCategory(data:CategoryData){
        return this.http.post('http://127.0.0.1:3000/v1/categories',data,{headers : this.headers}).map(response => response.json());
    }

    checkLogin(data:LoginData){
        return this.http.post('http://127.0.0.1:3000/v1/auth/signin',data).map(response => response.json());
    }
    
}