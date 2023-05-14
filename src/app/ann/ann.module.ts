import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnRoutingModule } from './ann-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AnnComponent } from './ann.component';


@NgModule({
  declarations: [

    ListComponent,
    AnnComponent
  ],
  imports: [
    CommonModule,
    AnnRoutingModule
  ]
})
export class AnnModule { }
