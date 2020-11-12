import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService} from '../services/firestore/firestore.service';
import { MessagingService } from '../services/messaging.service';
@Component({
  selector: 'app-instrucciones-ficha-medica',
  templateUrl: './instrucciones-ficha-medica.page.html',
  styleUrls: ['./instrucciones-ficha-medica.page.scss'],
})
export class InstruccionesFichaMedicaPage implements OnInit {

  constructor(private messagingService: MessagingService, private fb: FirestoreService) { }

  ngOnInit() {
    
  }
  async guardartoken()
  { this.messagingService.requestPermission();
    this.fb.AgregarIDFBaDB()}
}
