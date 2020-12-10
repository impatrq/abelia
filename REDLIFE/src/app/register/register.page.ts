import { Component, OnInit } from '@angular/core';
import {FirestoreService } from '../services/firestore/firestore.service';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessagingService } from '../services/messaging.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: user = new user ();
  constructor(private authSvc: AuthService,  private messagingService: MessagingService, private router: Router, private db: AngularFirestore, private fb: FirestoreService ) { }

  ngOnInit() { }
  async register() {
    this.authSvc.register(this.user)
    .then(user=>{
    console.log("Se Registro Exitosamente", user, this.user);
    const id= user.user.uid;
    this.user.id= id;
    this.user.email= user.user.email;
    this.fb.anadirusuario(this.user);
    this.router.navigateByUrl('logoreg');
   
            })
  .catch(err=>{
    console.log(err);
    switch
    (err.code){
      case("auth/invalid-email"):console.log("Email y/o Contraseña invalidos");
      case("auth/email-already-in-use"):console.log("Ya existe una cuenta con la direccion de correo ingresada");
      case("auth/weak-password"):console.log("La contraseña debe tener 6 caracteres como minimo");
      break;
    }
  })
  }
}

