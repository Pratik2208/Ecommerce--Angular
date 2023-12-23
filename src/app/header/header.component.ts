import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  menuType : string = 'default';
  sellerName : string = '';
  searchResult : undefined | Product[];

  constructor(private router: Router , private productService : ProductService) {}

  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            // we will get that seller into object form
            let sellerStored = localStorage.getItem('seller');
            let sellerData = sellerStored && JSON.parse(sellerStored)[0];
            this.sellerName = sellerData.name;
          }
          /* console.warn('in seller area'); */
        } else {
          /* console.warn('outside seller area'); */
          this.menuType = 'default';
        }
      }
    });
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  searchProduct(query : KeyboardEvent){
    // KeyBoard Event Occurs when user releases the key
    if(query){
      const element = query.target as HTMLInputElement;
      this.productService.searchProduct(element.value)
      .subscribe((result) => {
        this.searchResult = result;
      })
    }
  }
}
