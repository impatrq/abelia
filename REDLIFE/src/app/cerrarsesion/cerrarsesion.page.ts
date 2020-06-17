import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FirestoreService} from '../services/firestore/firestore.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';

import { fichamedica } from '../shared/ficha-medica.class'

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.page.html',
  styleUrls: ['./cerrarsesion.page.scss'],
})
export class CerrarsesionPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private firestore: FirestoreService) { }

  ngOnInit() {
    this.authSvc.estadodesesion();
  }
    /*this.firestore.getUsuarios().subscribe(usuarios=> {
      console.log(usuarios);
    })*/
  
async cerrarsesion()
{
  this.authSvc.cerrarsesion()
  .then (()=>{
    console.log('se cerro sesión correctamente');
    console.log();
    this.router.navigateByUrl('/login');
  })
  .catch (err=>{
    console.log()
  })
}
}
