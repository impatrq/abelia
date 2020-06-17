import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'
import { fichamedica } from '../shared/ficha-medica.class';

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.page.html',
  styleUrls: ['./ficha-medica.page.scss'],
})
export class FichaMedicaPage implements OnInit {
  fichamedica: fichamedica= new fichamedica ();
  constructor( private db: AngularFirestore ) { }

  ngOnInit() {}

  }


