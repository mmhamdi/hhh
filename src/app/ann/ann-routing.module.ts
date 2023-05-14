import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnComponent } from './ann.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'ann',component:AnnComponent,
children:[
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnRoutingModule { }
