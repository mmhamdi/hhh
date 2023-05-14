import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormProductComponent } from './form-product/form-product.component';
import { AnnComponent } from './ann/ann.component';
import { AddComponent } from './ann/add/add.component';
import { ListComponent } from './ann/list/list.component';
import { AnnModule } from './ann/ann.module';
import { EtudiantComponent } from './etudiant/etudiant.component';
import{HttpClientModule} from "@angular/common/http"
import { FormproductComponent } from './formproduct/formproduct.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';



const ROUTES:Routes=[
{path:'',redirectTo:'home', pathMatch:'full'},
 {path:'home',component:ProductComponent} ,
 {path:'product',component:AddproductComponent} ,
 {path:'edit/:id',component:EditProductComponent} ,
 {path:'todo',component:TodoComponent} ,
 {path:'todo/edit/:id',component:EditTodoComponent} ,
 {path:'todo/add',component:AddTodoComponent} ,
 {path:'**',component:NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TodoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    FormProductComponent,
    FormproductComponent,
    ProductCardComponent,
    AddproductComponent,
    EditProductComponent,
    EditTodoComponent,
    AddTodoComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnnModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
