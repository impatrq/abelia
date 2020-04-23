import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { user} from '../shared/user.class';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: user = new user ();
  constructor(private authSvc: AuthService, private router: Router ) { }

  ngOnInit() {
  }
  async register() {
  const user = await this.authSvc.register(this.user)
  .then(register=>console.log('Se ha registrado correctamente'))
  .then(register=> this.router.navigateByUrl('/logoreg'))
  .catch(register=> console.log('Error en el registro'))
  }
 }

