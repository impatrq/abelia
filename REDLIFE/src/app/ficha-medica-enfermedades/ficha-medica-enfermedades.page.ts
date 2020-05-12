import { Component,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ficha-medica-enfermedades',
  templateUrl: './ficha-medica-enfermedades.page.html', 
  styleUrls: ['./ficha-medica-enfermedades.page.scss'],
})
export class FichaMedicaEnfermedadesPage {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Importante!',
      message: 'Por favor revise los datos ingresados porque son importantes en caso de emergencia. Igualmente, estos podran ser modificados mas adelante.',
      buttons: ['Revisar','Continuar!']
    });

    await alert.present();
  }
}