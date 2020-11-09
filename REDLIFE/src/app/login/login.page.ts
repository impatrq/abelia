import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { FirestoreService} from '../services/firestore/firestore.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: user = new user ();

  constructor(public alertController: AlertController, private authSvc: AuthService, private router: Router, private firestore: FirestoreService) { }

  ngOnInit() {
  }
  async login() {
    this.authSvc.login(this.user)
     .then(user=>{
       this.router.navigateByUrl('/cerrarsesion');
       console.log('Inició sesión correctamente');
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

    async presentAlert() {
      const alert = await this.alertController.create({
        header: '¡Importante!',
        message: 'Cuando oprima "Continuar" va a ser redirigido a la pestaña de recuperación de la contraseña. Por favor, lea con atención las instrucciones.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {}
          },
          {
            text: 'Continuar',
            handler: () => {
              this.router.navigateByUrl('recuperacioncontrasena');
            }
          }
        ]
      });
      await alert.present();
    }
  }
  
