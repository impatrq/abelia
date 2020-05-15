import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Usuarios } from 'src/app/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }

  getUsuario() {
    return this.firestore.collection('usuarios').snapshotChanges();
}

createUsuario(usuarios: Usuarios){
  return this.firestore.collection('usuarios').add(usuarios);
}

updateUsuaurio(usuarios: Usuarios){
  delete usuarios.id;
  this.firestore.doc('usuarios/' + usuarios.id).update(usuarios);
}

deleteUsuario(usuarioId: string){
  this.firestore.doc('usuarios/' + usuarioId).delete();
}

}
