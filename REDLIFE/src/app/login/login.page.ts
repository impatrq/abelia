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
    this.authSvc.login(this.user)
     .then(user=>{
       this.router.navigateByUrl('/home');
       console.log('Inició sesión correctamente');
      })
     .catch(err=> {
       console.log(err);
        switch
       (err.code){
         case "auth/invalid-email": console.log("Email o Contraseña invalidos.");
         case "auth/wrong-password": console.log("Email o Contraseña invalidos.");
         break;
       }
      })
    }
  }
