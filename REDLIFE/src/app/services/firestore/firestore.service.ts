import { Injectable } from '@angular/core';
import { user} from '../../shared/user.class';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, refCount } from 'rxjs/operators';

import { fichamedica } from '../../shared/ficha-medica.class'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  user:user;
  private usuario: user;
  private usuariomanejador: BehaviorSubject<user>;
  private usuarioestado: Observable<user>;

  DatosFichamedica:fichamedica;
  private fichamedica: fichamedica;
  private fichamedicamanejador: BehaviorSubject<fichamedica>;
  private fichamedicaestado: Observable<fichamedica>;


  constructor (private db: AngularFirestore) {
    this.usuario = undefined;
    this.usuariomanejador = new BehaviorSubject<user>(undefined);
    this.usuarioestado = this.usuariomanejador.asObservable();

    this.usuarioestado.subscribe((usuarionuevo:user)=>{
      this.usuario=usuarionuevo


    this.fichamedica = undefined;
    this.fichamedicamanejador = new BehaviorSubject<fichamedica>(undefined);
    this.fichamedicaestado = this.fichamedicamanejador.asObservable();

    })

  }
anadirusuario(usuario){
   this.db.collection('usuarios').add({
    email : usuario.user.email,
    id : usuario.user.uid
    }).then((docRef)=>{
      usuario.idfb = docRef.id;
      usuario.id = usuario.user.uid;
      usuario.email = usuario.user.email;
      this.actualizarusuario(usuario);
    })
        
}
actualizarusuario(usuario:user){
    this.usuario = usuario;
    this.usuariomanejador.next(usuario);
    console.log(this.usuario);
}  
    //'items', ref => ref.where('size', '==', 'large'))
traercoleccion(){
    this.db.collection('usuarios', ref => ref.where( "id", "==" , this.usuario.id)).valueChanges().subscribe((res)=>
    console.log(res))
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