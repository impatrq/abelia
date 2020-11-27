import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import {FirestoreService} from '../services/firestore/firestore.service';
import { user } from '../shared/user.class';
import { MenuController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})

export class PaginaInicialPage implements OnInit {
  usuario;
   constructor( private messagingService: MessagingService, private menu: MenuController, private angularFireMessaging: MessagingService, private firestore: FirestoreService) { }
    ngOnInit() {
      this.firestore.usuarioestado.subscribe(usuario => {
        this.usuario = usuario;
      })
    }
      openFirst() {
      this.menu.enable(true, 'MenuPrincipal');
      this.menu.open('MenuPrincipal');
    }
    async token(){
      this.messagingService.existeeltoken();
    }
    ionViewWillEnter(){
      this.firestore.actualizardatos();
      this.messagingService.existeeltoken();
               
    }
  }