import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from "./user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  user: User
  constructor(private fireAuth: AngularFireAuth , private router:Router) {
    fireAuth.authState.subscribe(user => {
      this.user = user
    })
    this.userData = fireAuth.authState;
  }

  async loginWithGoogle() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        console.log('login succ');

      }).catch(err => {
        console.log('err', err);

      })
  }


  /* Sign up */
  SignUp(email: string, password: string) {
    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        this.router.navigate(['/videos'])
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.fireAuth
      .signOut();
  }
}
