import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{

  productData : undefined | Product;

  productUpdatedMessage : undefined | string;

  constructor(private route : ActivatedRoute , private productService : ProductService){

  }

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    // Now getting the product details from API
    productId && this.productService.getProduct(productId)
    .subscribe((product) => {
      console.log(product);
      this.productData = product;
    })
  }

  submit(data : Product){
    if(this.productData){
      data.id = this.productData.id;
    }
    this.productService.updateProduct(data)
    .subscribe((updatedProduct) => {
      if(updatedProduct){
        this.productUpdatedMessage = 'Product Updated Successfully';
      }
    });

    setTimeout(() => {
      this.productUpdatedMessage = undefined
    } , 3000);
  }
}
