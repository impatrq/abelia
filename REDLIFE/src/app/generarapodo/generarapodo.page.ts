import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { FirestoreService} from '../services/firestore/firestore.service';
@Component({
  selector: 'app-generarapodo',
  templateUrl: './generarapodo.page.html',
  styleUrls: ['./generarapodo.page.scss'],
})
export class GenerarapodoPage implements OnInit {
apodo:string;

  constructor(private router: Router, private db: AngularFirestore,  private fb: FirestoreService) { }

  ngOnInit() {
  }
 //traercoleccion() {
 // this.fb.traercoleccion()
//}
generarapodo(){
 this.fb.generarapodo(this.apodo);
 this.fb.obtenernombredeusuario();
}
}

