import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] 
})
export class SignupComponent implements OnInit {
  data = { 
    name: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
    this.sellerService.reloadseller();
  }
  showLogin=false;
  message = '';
  constructor(private sellerService: SellerService, private router: Router) {}
  
  signUp(data: any): void{
  console.log(data);
  this.sellerService.SignUp(data)
  }
  
  login(data: any): void{
    // console.log(data); 
    this.sellerService.Login(data)
    this.sellerService.isLoginError.subscribe((error)=>{
      if(error){
        alert('Email or Password is incorrect')
      }
    })
    }

  openLogin(){
this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
      }

}



  

