import { Component, OnInit } from '@angular/core';
import {AutoService} from 'src/app/services/auto.service';
import {MatDialog} from "@angular/material/dialog";
import {UpdateProductComponent} from "../update-product/update-product.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [AutoService]
})
export class ProductListComponent implements OnInit {
  public autos: any;

  constructor(
    private _autoService: AutoService
  ) {
    this.getAllAutos();
  }

  ngOnInit(): void {
  }

  getAllAutos(){
    this._autoService.getAutos().subscribe(
      response => {
        this.autos = JSON.parse(JSON.stringify(response));
      },
      error => {
        console.error(error);
      }
    );
  }
}
