import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './guard.guard';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'home',component:HomeComponent,canActivate:[guardGuard]},
{path:'category',component:CategoryComponent,canActivate:[guardGuard]},
{path:'products/:category',component:ProductsComponent,canActivate:[guardGuard]},
{path:'singleProduct/:id',component:SingleProductComponent,canActivate:[guardGuard]},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{ path: 'cart', component: CartComponent},
{path:'**',component:NotFoundComponent}



];
