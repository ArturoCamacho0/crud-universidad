import {Component, Input, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";
import {UpdateProductComponent} from "../update-product/update-product.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ AutoService ]
})
export class ProductComponent implements OnInit {
  @Input() auto: any;

  constructor(private _autoService: AutoService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete(id: string) {
    this._autoService.delete(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '500px',
      data: {
        id: this.auto.id,
        nombre: this.auto.nombre,
        descripcion: this.auto.descripcion,
        precio: this.auto.precio
      },
    });
  }

}
