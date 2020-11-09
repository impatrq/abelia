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
      header: 'Importante!',
      message: 'Por favor revise los datos ingresados porque son importantes en caso de emergencia. Igualmente, estos podran ser modificados mas adelante.',
      buttons: [
        {
          text: 'Revisar',
          role: 'cancel',
          handler: () => {}
        },
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

