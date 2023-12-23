import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts : undefined | Product[];
  trendyProducts : undefined | Product[];

  constructor(private productService : ProductService){}

  ngOnInit(){
    this.productService.popularProduct()
    .subscribe((result) => {
      this.popularProducts = result;
    });

    this.productService.trendyProducts()
    .subscribe((result) => {
      this.trendyProducts = result;
    });

  }

}
