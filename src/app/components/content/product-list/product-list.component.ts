import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [AutoService]
})
export class ProductListComponent implements OnInit {

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
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

}
