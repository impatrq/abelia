import { Injectable } from '@angular/core';
import { user} from '../../shared/user.class';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
//item=user
//items=usuarios
/*
  usuariosCollection;
  usuarioDoc;
  usuarios: Observable<user[]>;*/

  constructor (private db: AngularFirestore) {
  }
   }
   /*
   getUsuarios(){
     //return this.db.collection('usuarios').valueChanges();
   }
}
 /* guardarregistroendb (){

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