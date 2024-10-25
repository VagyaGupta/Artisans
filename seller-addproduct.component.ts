import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddproductService } from '../services/addproduct.service';
import { Products } from '../../../datatype';

@Component({
  selector: 'app-seller-addproduct',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seller-addproduct.component.html',
  styleUrl: './seller-addproduct.component.scss'
})

export class SellerAddproductComponent {
  constructor(private addproduct:AddproductService){}
  
  submit(data:Products){
   this.addproduct.addProduct(data).subscribe((result)=>{
    if(result){
      console.log(result);
      alert('Product added Successfully')
    }
   })
  }

}
