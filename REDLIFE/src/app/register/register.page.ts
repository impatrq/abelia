import { Component, OnInit } from '@angular/core';
import {FirestoreService } from '../services/firestore/firestore.service';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessagingService } from '../services/messaging.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { async } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: user = new user ();
  constructor(private toastController: ToastController, private authSvc: AuthService,  private messagingService: MessagingService, private router: Router, private db: AngularFirestore, private fb: FirestoreService ) { }

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
      case("auth/invalid-email"): {this.toastPorFormatoInvalidodeEmail();
      }
      break;
      case("auth/email-already-in-use"):{this.toastPorExistenciadeDireccionIngresada();
      }
      break;
      case("auth/weak-password"):{ this.toastPorContraseñaInvalida()}
      break;
    }
  })
  }
  async toastPorFormatoInvalidodeEmail()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"No es válido el correo eléctronico" })  
    await mensajeDeError.present(); 
  }
  async toastPorExistenciadeDireccionIngresada()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"El correo eléctronico ya está en uso" })  
    await mensajeDeError.present(); 
  }
  async toastPorContraseñaInvalida()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"La contraseña debe tener al menos 6 caracteres" })  
    await mensajeDeError.present(); 
  }
}

