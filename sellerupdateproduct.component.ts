import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddproductService } from '../services/addproduct.service';
import { Products } from '../../../datatype';

@Component({
  selector: 'app-sellerupdateproduct',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sellerupdateproduct.component.html',
  styleUrl: './sellerupdateproduct.component.scss'
})
export class SellerupdateproductComponent implements OnInit {
  productData:undefined|Products
  constructor(private route:ActivatedRoute,private product:AddproductService,private router:Router){} 
  
  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id')
    console.warn(productId)
    productId && this.product.getProductById(productId).subscribe((data)=>{
      console.warn(data)
      this.productData=data
    })
  }
  
submit(data:Products){
console.warn(data);
if(this.productData){
  data.id=this.productData.id;
}
this.product.updateProduct(data).subscribe((result)=>{
  if(result){
    alert('Product is updated')
    this.router.navigate(['/app-seller-home/'])
    
  }
})

}
}
