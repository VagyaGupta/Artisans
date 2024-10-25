
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authguardGuard } from './authguard.guard';
import { SellerAddproductComponent } from './seller-addproduct/seller-addproduct.component';
import { SellerupdateproductComponent } from './sellerupdateproduct/sellerupdateproduct.component';


export const routes: Routes = [
     {
        path:'',
        redirectTo:'app-home',
         pathMatch:'full'
     },
    {
        path:'app-login',
        component:LoginComponent
    },
    {
        path:'app-seller-home',
        component:SellerHomeComponent,
        canActivate:[authguardGuard]
        
    },
    {
        path:'app-seller-addproduct',
        component:SellerAddproductComponent,
        canActivate:[authguardGuard]
    },
    {
        path:'app-sellerupdateproduct/:id',
        component:SellerupdateproductComponent,
        canActivate:[authguardGuard]
    },

    {
        path:'app-signup',
        component:SignupComponent
    },
    {
        path:'app-home',
        component:HomeComponent
    }, 
    {
        path:'**',
        component:NotFoundComponent
    }
];
