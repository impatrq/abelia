import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { FirestoreService} from '../services/firestore/firestore.service';
import { Router } from '@angular/router';
import { MessagingService } from '../services/messaging.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: user = new user ();

  constructor(private toastController: ToastController, public alertController: AlertController, private authSvc: AuthService, private router: Router, private firestore: FirestoreService, private messagingService: MessagingService) { }

  ngOnInit() {
  }
  async login() {
     this.authSvc.login(this.user)
     .then(user=>{
      this.firestore.actualizarusuario(user.user); 
      this.firestore.traerconuidaliniciarsesion(user.user.uid);
       this.router.navigateByUrl('/pagina-inicial');
       console.log('Inició sesión correctamente');
       //si se pone algo mas cambiar cerrarsesion por el token
      })
       .catch(err=> {
       console.log(err);
        switch
       (err.code){
         case("auth/invalid-email"): {this.toastPorEmailInvalido();}
         break;
         case("auth/wrong-password"):{this.toastPorContraseñaInvalida();};
         break;
         case("auth/argument-error"):{this.toastPorEmailInexistente();};
         break;
         case("auth/user-not-found"): {this.toastPorEmailInexistente();};
         break;
       }
      })
    }
    async toastPorEmailInvalido()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"El correo electrónico es incorrecto" })  
    await mensajeDeError.present(); 
  }
  async toastPorContraseñaInvalida()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"La contraseña es incorrecta" })  
    await mensajeDeError.present(); 
  }
  async toastPorEmailInexistente()
  {
    const mensajeDeError = await this.toastController.create({color:"danger", duration:2000, message:"La cuenta con ese correo electrónico no existe" })  
    await mensajeDeError.present(); 
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
  
