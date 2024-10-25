import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from "./header/header.component";
import {   HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, SignupComponent, LoginComponent,
     FormsModule, HeaderComponent, HttpClientModule, SellerHomeComponent,NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'artisans';
  
}

