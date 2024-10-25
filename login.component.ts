import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    message='';
    IsLoggedIn:boolean=false;
    passwordPattern='^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$';
    LoginObj={
      email:'',
      password:''
    };
    constructor(private http:HttpClient){
      // this.LoginObj='';
    }
    onLogin(){
      this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.LoginObj).subscribe((res:any)=>{
        if(res.result){
          alert("Login success");
        }
        else{
          alert(res.message);
        }
      }
      )
    }
  // success(){
  //   this.message=`Welcome ${this.username}`;
  //   this.IsLoggedIn=true;
  // }

  }
