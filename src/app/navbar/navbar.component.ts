import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth , public router: Router ) {

  }

  ngOnInit() {
  }

  logaout(){
    this.afAuth.auth.signOut();
    localStorage.setItem('isLoggedIn','false')
    this.router.navigate(['/login'])
    localStorage.removeItem('isLoggedIn');

    location.reload();

  }

}
