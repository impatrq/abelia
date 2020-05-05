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
  this.authSvc.register(this.user)
  .then(user=>{
    this.router.navigateByUrl('/instrucciones-ficha-medica');
    console.log("Se Registro Exitosamente");
  })
  .catch(err=>{
    console.log(err);
    switch
    (err.code){
      case("auth/invalid-email"):console.log("Email y/o Contraseña invalidos");
      case("auth/email-already-in-use"):console.log("Ya existe una cuenta con la direccion de mail ingresada");
      case("auth/weak-password"):console.log("La contraseña debe tner 6 caracteres como minimo");
      break;
    }
  })
  }
 }

