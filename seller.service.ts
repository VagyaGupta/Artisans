import {  EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, Signup } from '../../../datatype';

@Injectable({
  providedIn: 'root'
})

export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  

  constructor(private http:HttpClient,private router:Router){}
 
  SignUp(data:Signup){
    return this.http.post('http://localhost:3000/seller',data,{observe:'response'})
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['app-seller-home'])
  })
}
Login(data:Login){
 
  this.http.get(`http://localhost:3000/seller/?email=${data.email}&password=${data.password}`,
  { observe:'response'}).subscribe((result:any)=>
  {
    console.log(result)
    if(result && result.body && result.body.length){
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['app-seller-home'])
      console.warn('User logged in')
    }
    else{
      console.warn('Login failed')
      this.isLoginError.emit(true)
    }
  })
}

reloadseller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
     this.router.navigate(['app-seller-home'])
    }
   }
}






