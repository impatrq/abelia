import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FirestoreService} from './services/firestore/firestore.service';
import { menuController } from '@ionic/core';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'push-notification';
  message;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public messagingService: MessagingService,
    ) {
    this.initializeApp();
      }
  
   
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async openFirst() {
    menuController.enable(true, 'MenuPrincipal');
    menuController.open('MenuPrincipal');
  }

  async openEnd() {
    menuController.open('MenuPrincipal');
  }

  async openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }
}
