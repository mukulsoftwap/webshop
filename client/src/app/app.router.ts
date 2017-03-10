import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';

const router: Routes = [
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: '',
        component: HomeComponent
    },
     {
        path: 'category',
        component: CategoryComponent
    }
]

export const myRouter = RouterModule.forRoot(router);