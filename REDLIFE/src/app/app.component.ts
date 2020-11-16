import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FirestoreService} from './services/firestore/firestore.service';
import { MenuController } from '@ionic/angular';
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
    private menu: MenuController,
    ) {
    this.initializeApp();
      }
  
   
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    this.menu.enable(true, 'MenuPrincipal');
    this.menu.open('MenuPrincipal');
  }
}
