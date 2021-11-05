import {Component, Inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  providers: [AutoService]
})
export class UpdateProductComponent implements OnInit {
  nombre: string|undefined;
  descripcion: string|undefined;
  precio: number|undefined;

  constructor(
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    private _autoService: AutoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.precio = data.precio;
  }

  ngOnInit(): void {
  }

  update(){
    let auto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    }
    this._autoService.update(this.data.id, auto).then(() => {

    }).catch(e => {
      console.error(e);
    })
  }

}
