import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [
    {
      img: "./assets/img/angularicon-img.png",
      description: "Angular"
    },
    {
      img: "./assets/img/htmlicon-img.png",
      description: "HTML"
    },
    {
      img: "./assets/img/angularicon-img.png",
      description: "Angular"
    },
    {
      img: "./assets/img/htmlicon-img.png",
      description: "HTML"
    }
  
  
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
