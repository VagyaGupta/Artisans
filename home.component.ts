import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AddproductService } from '../services/addproduct.service';
import { Products } from '../../../datatype';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProduct:undefined|Products[];
  constructor(private product:AddproductService){};
  ngOnInit(): void {
    this.product.popularProducts().subscribe((result)=>{
      console.warn(result);
      this.popularProduct=result;
    })

    
  }

}
