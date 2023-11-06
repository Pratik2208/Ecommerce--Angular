import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent  implements OnInit{

  productList : undefined | Product[];

  productDeleted : string | undefined;

  constructor(private productService : ProductService){}

  ngOnInit() {
    this.list();
  }

  onDelete(id : number){
    this.productService.deleteProduct(id)
    .subscribe((result) => {
      if(result){
        this.productDeleted = "Product Deleted";
        this.list();
      }
    })

    setTimeout(()=> {
      this.productDeleted = undefined;
    } , 3000);
  }

  onUpdate(data : any){}

  list(){
    // When Component is loaded then productlist should be loaded.
    this.productService.getProductList()
    .subscribe((result) => {
      // we will assign received product list from api to our productList variable
      this.productList = result;
    })
  }
}
