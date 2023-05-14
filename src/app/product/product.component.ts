import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

name="bonjour 4ARCTIC 7"
prop:boolean=false
message:string=''
prop1="bonjour"
prixMax:number=null;
listProduct:Product[]=[]
@ViewChild(ProductCardComponent)
private x:ProductCardComponent;

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {

  /*  this.listProduct=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]*/
this.productService.getAll().subscribe((data:any)=>{
  this.listProduct=data

})

  }
add(){
  return 2
}
show(){
  this.message='massage est affiche'
}
buy(i:number){
  this.listProduct[i].quantity=this.listProduct[i].quantity -1

}
like(prod:Product){
  let i=this.listProduct.indexOf(prod)
  this.listProduct[i].like=this.listProduct[i].like +1
}
appStart(){
  this.x.start();
}
}
