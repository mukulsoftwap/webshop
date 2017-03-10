import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(){
  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      if(location.pathname!="/category"){
        location.href="category";
      };
    }else{
      if(location.pathname!="/login"){
        location.href="login";
      };
    }
  }
}
