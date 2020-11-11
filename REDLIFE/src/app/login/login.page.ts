import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { FirestoreService} from '../services/firestore/firestore.service';
import { Router } from '@angular/router';
import { MessagingService } from '../services/messaging.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: user = new user ();

  constructor(private authSvc: AuthService, private router: Router, private firestore: FirestoreService, private messagingService: MessagingService) { }

  ngOnInit() {
  }
  async login() {
     this.authSvc.login(this.user)
     .then(user=>{
       this.firestore.traerconuidaliniciarsesion(user.user.uid);
       this.router.navigateByUrl('/cerrarsesion');
       console.log('Inició sesión correctamente');
       //si se pone algo mas cambiar cerrarsesion por el token
      })
       .catch(err=> {
       console.log(err);
        switch
       (err.code){
         case "auth/invalid-email": console.log("Email o Contraseña invalidos.");
         case "auth/wrong-password": console.log("Email o Contraseña invalidos.");
         case("auth/argument-error"):console.log("El mail es inexistente o invalido");
         case("auth/user-not-found"):console.log("La Cuenta es Inexistente");
         break;
       }
      })
    }
  }
