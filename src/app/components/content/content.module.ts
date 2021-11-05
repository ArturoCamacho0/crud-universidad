import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ContentModule { }
