import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMessage : string | undefined;

  constructor(private productService : ProductService){}

  ngOnInit() {
  }

  submit(data : Product){
    this.productService.addProduct(data)
    .subscribe((result) => {
      console.log(result);
      if(result){
        this.addProductMessage = "Product Added Successfully";
      }
      setTimeout(()=> this.addProductMessage = undefined , 3000);
    })
  }

}
