import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { fichamedica } from '../shared/ficha-medica.class';
import { FirestoreService } from '../services/firestore/firestore.service'

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.page.html',
  styleUrls: ['./ficha-medica.page.scss'],
})
export class FichaMedicaPage implements OnInit {
  fichamedica: fichamedica = new fichamedica;
  constructor( private db: AngularFirestore, private router: Router, private fb: FirestoreService ) { }

  ngOnInit() {}

  anadirdatosfichamedica(){
    this.fb.anadirdatosfichamedica(this.fichamedica);
    console.log(this.fichamedica.nombrecompleto)
  }

  }


