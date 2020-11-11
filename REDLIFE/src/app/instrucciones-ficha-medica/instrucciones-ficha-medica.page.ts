import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
@Component({
  selector: 'app-instrucciones-ficha-medica',
  templateUrl: './instrucciones-ficha-medica.page.html',
  styleUrls: ['./instrucciones-ficha-medica.page.scss'],
})
export class InstruccionesFichaMedicaPage implements OnInit {

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }
  async guardartoken()
  {this.messagingService.requestPermission();}
}
