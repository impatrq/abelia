import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import {FirestoreService} from '../services/firestore/firestore.service';
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})

export class PaginaInicialPage implements OnInit {
   constructor(private angularFireMessaging: MessagingService) { }
    ngOnInit() {}
  async receiveMessage() {
        this.angularFireMessaging.receiveMessage()
  }}