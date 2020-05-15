import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Probando } from 'src/app/probando.model';

@Injectable({
  providedIn: 'root'
})
export class ProbandoService {

  constructor(private firestore: AngularFirestore) { }

  getProbando(){
    return this.firestore.collection('probando').snapshotChanges();
  }

  createProbando(probando: Probando){
    return this.firestore.collection('probando').add(probando);
  }

  updateProbando(probando: Probando){
    delete probando.id;
    this.firestore.doc('probando/' + probando.id).update(probando);
  }

  deleteProbando(probandoId: string){
    this.firestore.doc('probando/' + probandoId).delete();
  }

}
