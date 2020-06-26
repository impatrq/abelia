import { Injectable } from '@angular/core';
import { user} from '../../shared/user.class';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, refCount } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  user:user;
  private usuario: user;
  private usuariomanejador: BehaviorSubject<user>;
  private usuarioestado: Observable<user>;
  private RefDb;

  constructor (private db: AngularFirestore) {
    this.usuario = undefined;
    this.usuariomanejador = new BehaviorSubject<user>(undefined);
    this.usuarioestado = this.usuariomanejador.asObservable();
    this.usuarioestado.subscribe((usuarionuevo:user)=>{
      this.usuario=usuarionuevo
    })
    
  }
anadirusuario(usuario){
    this.db.collection('usuarios').add({
    email : usuario.email,
    id : usuario.id
    }).then((docRef)=>{
      usuario.idfb = docRef.id;
      this.actualizarusuario(usuario);
    })
        
    }
  actualizarusuario(usuario){
    this.usuario = usuario;
    this.usuariomanejador.next(usuario);
  }  
  generarapodo(apodo){
    this.usuario.user= apodo;
    this.actualizarusuario(this.usuario);
    console.log(this.usuario);
    this.db.collection('usuarios').doc(this.usuario.idfb).set({
      user: this.usuario.user,
      }, { merge: true }) //merge es para combinar datos
    }
  obtenernombredeusuario(){
    const a = this.db.collection('usuarios').doc(this.usuario.idfb);
    a.get().forEach((doc)=> {
      console.log(doc.data().user);
    })
   /* this.traercoleccion().subscribe((res)=>{
     console.log(res);      
    })
    DocumentReference docRef = db.collection("cities").document("BJ");
docRef.get().addOnSuccessListener(new OnSuccessListener<DocumentSnapshot>() {
  @Override
  public void onSuccess(DocumentSnapshot documentSnapshot) {
      City city = documentSnapshot.toObject(City.class);
  }
});*/
    //this.db.collection('usuarios').doc(this.usuario.idfb).data()
    }
    //'items', ref => ref.where('size', '==', 'large'))
  traercoleccion(){
    return this.RefDb = this.db.collection('usuarios', ref => ref.where( "id", "==" , this.usuario.id)).valueChanges()
    }
    }
  
   /*
   getUsuarios(){
     //return this.db.collection('usuarios').valueChanges();
   }
}
  guardarregistroendb (){

       this.db.collection('usuarios').doc(this.us.id).set({
         email= this.us.email;

       })
    })
    return this.usuariosCollection;
}
}

this.db.collection('usuarios').doc('pUTAwDdBwjIPV1irfP7B').valueChanges().subscribe(usuario=>{
  console.log(usuario)
})
*/