import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id:number;
  constructor(private activaterouter:ActivatedRoute,
    private productservice:ProductService,private router:Router) { }
  Prod:Product={
    id:0,
    title:"",
    price:null,
    quantity:null,
    like:null

  }
  
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id']
this.productservice.getById(this.id).subscribe((data:any)=>{
this.Prod=data
})
  }

  update(){
this.productservice.Update(this.id,this.Prod).subscribe(()=>{
  console.log("updated")
  this.router.navigateByUrl('/product')
})
  }

}
