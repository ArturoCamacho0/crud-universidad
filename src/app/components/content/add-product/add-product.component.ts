import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AutoService} from "../../../services/auto.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AutoService]
})
export class AddProductComponent implements OnInit {
  nombre: string|undefined;
  descripcion: string|undefined;
  precio: number|undefined;

  public data: any;

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    private _autoService: AutoService
  ) {

  }

  ngOnInit(): void {}

  save() {
    this.data = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    }

    this._autoService.createAuto(this.data).then(() => {
      console.log('Se ha creado el auto');
    }).catch(e => {
      console.error(e);
    })
  }
}
