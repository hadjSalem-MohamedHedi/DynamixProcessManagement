import { Component} from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dpm-Fr';
  private isLoggedIn: boolean=false;
  user: Observable<firebase.User>;

private email: string;
  constructor(public afAuth: AngularFireAuth ,  public router: Router) {

    this.user = afAuth.authState;
    let status = localStorage.getItem('isLoggedIn');
    console.log("is loged = "+this.isLoggedIn);
    if(status==='true'){this.isLoggedIn=true}
    else{this.isLoggedIn=false}


    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.isLoggedIn=true
        localStorage.setItem('isLoggedIn','true')
        console.log("user connecter ");

      }
      else {
      this.isLoggedIn=false
      console.log("user non connecter ");

    }
    });




   }


}
