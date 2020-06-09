import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { user} from '../shared/user.class';

import { AngularFirestore } from '@angular/fire/firestore'

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor( private db: AngularFirestore, private auth:AngularFireAuth ) { }

  async login(user:user)
  { 
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }
  
  async register(user:user)
  { 
   
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      
  
  }
async recuperarcontrasena(email:string){
  return this.auth.sendPasswordResetEmail(email)
}
async cerrarsesion() {
  return this.auth.signOut()
}
async estadodesesion() {
  return this.auth.onAuthStateChanged((user) =>{
    if (user) {
      console.log('singin');
      this.db.collection('usuarios')
      .valueChanges()
      .subscribe(usuario => {
         console.log(usuario);
       })
    }
    else {
      console.log('logout');
    }
  })
}
}
