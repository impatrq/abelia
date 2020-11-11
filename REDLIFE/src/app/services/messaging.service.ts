import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions} from '@angular/fire/functions';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
import {FirestoreService} from '../services/firestore/firestore.service';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
      constructor(private angularFireMessaging: AngularFireMessaging, private db:FirestoreService )
       {
          this.angularFireMessaging.messages.subscribe()
          }
        
      existeeltoken(){
        this.angularFireMessaging.getToken.subscribe(
          (token) => { 
            const token2 = token;
            this.db.actualizartoken(token2);
           })}
  
      requestPermission() {
      this.angularFireMessaging.requestToken.subscribe(
      (token) => {
      console.log(token);
      const token1= token;
      this.db.anadirtoken(token1);
      })
    
      }}
    