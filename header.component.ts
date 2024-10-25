import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private route:Router){}
  sellerName='';
  menuType:string='default';

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')) {
        this.menuType='seller';
        if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerData= sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
        }}
        else {
          this.menuType='default';
        }
      }
    })
  }


  logout(){
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }
}
