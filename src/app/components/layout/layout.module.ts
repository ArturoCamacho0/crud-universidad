import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';

import { HeaderComponent } from './header/header.component';
import {AddProductComponent} from "../content/add-product/add-product.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    AddProductComponent
  ]
})
export class LayoutModule { }
