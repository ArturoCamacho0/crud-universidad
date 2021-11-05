import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {AddProductComponent} from "../../content/add-product/add-product.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombre: string | undefined;
  descripcion: string | undefined;
  precio: number | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px',
      data: {
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.descripcion
      },
    });
  }

  ngOnInit(): void {
  }

}
