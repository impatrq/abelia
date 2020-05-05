import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperacioncontrasena',
  templateUrl: './recuperacioncontrasena.page.html',
  styleUrls: ['./recuperacioncontrasena.page.scss'],
})
export class RecuperacioncontrasenaPage implements OnInit {
   email:string;
  constructor(private authSvc: AuthService, private router: Router ) { }
  ngOnInit() {
  }
  async recuperarcontrasena() {
    this.authSvc.recuperarcontrasena(this.email)
    .then(()=>{
    console.log('se envio el correo')
    })
    .catch(err=>{ console.log(err)})
  }}

