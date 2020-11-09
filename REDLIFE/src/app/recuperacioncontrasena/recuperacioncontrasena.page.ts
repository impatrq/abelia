import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacioncontrasena',
  templateUrl: './recuperacioncontrasena.page.html',
  styleUrls: ['./recuperacioncontrasena.page.scss'],
})
export class RecuperacioncontrasenaPage implements OnInit {
   email:string;
  constructor(public alertController: AlertController, private authSvc: AuthService, private router: Router ) { }
  ngOnInit() {
  }
  async recuperarcontrasena() {
    this.authSvc.recuperarcontrasena(this.email)
    .then(()=>{
    console.log('se envio el correo')
    })
    .catch(err=>{ console.log(err)})
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Importante!',
      message: 'El mensaje ha sido enviado al mail introducido. Por favor, corrobore que asi sea y reestablezca la contraseña, luego intente ingresar nuevamente en la pestaña de Inicio de Sesión.',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.router.navigateByUrl('login');
          }
        }
      ]
    });
    await alert.present();
  }
}

