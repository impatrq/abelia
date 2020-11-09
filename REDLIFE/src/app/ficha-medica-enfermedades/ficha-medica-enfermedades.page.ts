import { Component,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'
import { FirestoreService } from '../services/firestore/firestore.service'
import { fichamedica } from '../shared/ficha-medica.class'

@Component({
  selector: 'app-ficha-medica-enfermedades',
  templateUrl: './ficha-medica-enfermedades.page.html', 
  styleUrls: ['./ficha-medica-enfermedades.page.scss'],
})
export class FichaMedicaEnfermedadesPage {
  fichamedica: fichamedica = new fichamedica;
  constructor(public alertController: AlertController, private router: Router, private db: AngularFirestore, private fb: FirestoreService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Importante!',
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
            this.router.navigateByUrl('generarapodo');
          }
        }
      ]
    });
    await alert.present();
  }

  anadirdatosfichamedicaenfermedades(){
    this.fb.anadirdatosfichamedicaenfermedades(this.fichamedica);
  }

}