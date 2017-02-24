import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const router: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: '',
        component: HomeComponent
    }
]

export const myRouter = RouterModule.forRoot(router);