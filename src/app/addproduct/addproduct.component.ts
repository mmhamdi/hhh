import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product!: Product;
 

  constructor(private productService:ProductService,private router:Router ) { 

  }

  ngOnInit(): void {
    this.product=new Product();
  
  }

  add(){
  this.productService.addproduct(this.product).subscribe(()=>{
    console.log('created')
this.router.navigateByUrl('/home')
  }
  )
    console.log(JSON.stringify(this.product))
  }

}
