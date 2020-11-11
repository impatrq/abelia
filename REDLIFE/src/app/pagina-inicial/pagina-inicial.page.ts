import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import {FirestoreService} from '../services/firestore/firestore.service';
import { user } from '../shared/user.class';
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})

export class PaginaInicialPage implements OnInit {
  user:user;
   constructor(private angularFireMessaging: MessagingService, private firestore: FirestoreService) { }
    ngOnInit() {}}
