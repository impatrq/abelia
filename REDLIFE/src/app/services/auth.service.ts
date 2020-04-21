import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { user} from '../shared/user.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  async login(user:user)
  { 
    return firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
  }
}
