import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: user = new user ();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async login() {
    const user = await this.authSvc.login(this.user)
    .then(login=>console.log('Inició sesión correctamente'))
    .then(login=> this.router.navigateByUrl('/home'))
    .catch(login=> console.log('Error en el inicio de sesión'))
   
   }}
