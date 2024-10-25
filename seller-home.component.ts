import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddproductService } from '../services/addproduct.service';
import { Products } from '../../../datatype';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.scss'
})
export class SellerHomeComponent implements OnInit {

  productList:undefined|Products[]

  constructor( private addproduct:AddproductService){ }
  
  ngOnInit(): void {
    this.list();
   
  }

  deleteproduct(id:number){
    console.warn("test id",id);
    this.addproduct.deleteProduct(id).subscribe((result)=>{
      if(result){
        alert('Product deleted successfully');
        this.list();
      }

    })
  }

  list(){
    this.addproduct.getProductList().subscribe((result)=>{
      console.log(result);
      this.productList = result;
    })
  }

}
