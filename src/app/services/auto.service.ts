import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private _firestore: AngularFirestore) { }

  getAutos() {
    return this._firestore.collection("autos").snapshotChanges();
  }
}
