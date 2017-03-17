import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { LoginData } from '../models/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ProductService]
})
export class LoginComponent implements OnInit {
  private data = new LoginData();
  constructor(private service : ProductService) { }

  ngOnInit() {
    
  }

  login(){
    this.service.checkLogin(this.data).subscribe((res)=>{
        localStorage.setItem('token',res.data.token);
        location.href="category ";
    });
  }

}
