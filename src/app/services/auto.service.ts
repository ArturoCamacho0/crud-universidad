import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private _firestore: AngularFirestore) { }

  getAutos() {
    return this._firestore.collection("auto").valueChanges({idField: 'id'});
  }

  createAuto(data: any) {
    return new Promise<any>((resolve, reject) =>{
      return this._firestore
        .collection("auto")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  delete(id: string) {
    return this._firestore
      .collection("auto")
      .doc(id)
      .delete().then(r => {});
  }

  update(id: string, data: any) {
    return this._firestore
      .collection("auto")
      .doc(id)
      .set(data);
  }
}
