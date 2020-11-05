import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions} from '@angular/fire/functions';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
      constructor(private angularFireMessaging: AngularFireMessaging)
       {
          this.angularFireMessaging.messages.subscribe()
          }
        
      requestPermission() {
      this.angularFireMessaging.requestToken.subscribe(
      (token) => {
      console.log('hola:' + token + 'ddd');
      },
      (err) => {
      console.error('Unable to get permission to notify.', err);
      }
      );
      }
      receiveMessage() {
      this.angularFireMessaging.messages.subscribe(
      (payload) => {
      console.log("new message received. ", payload);
      this.currentMessage.next(payload);
      })
      }
      }