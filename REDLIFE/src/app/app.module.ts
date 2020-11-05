import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { AngularFireMessagingModule} from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './services/messaging.service';
//firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireMessagingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, AngularFireAuthModule,  FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    MessagingService ,
    AsyncPipe ,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
