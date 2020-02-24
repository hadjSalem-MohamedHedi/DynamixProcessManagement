import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;
  constructor(public afAuth: AngularFireAuth , public router: Router ,public db: AngularFireDatabase ) {
    this.itemList = db.list('Comptes');

    this.afAuth.authState.subscribe(auth=>{
      if(auth){
        this.myemail = auth.email;
      }
     });

  }

  ngOnInit() {

    this.itemList.snapshotChanges().subscribe(actions=>{
     actions.forEach(action=>{
      let y =action.payload.toJSON()
      this.itemArray.push(y as ListItemClass)

    })
   })
  }

  logaout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('myemail');


    location.reload();

  }

}
export class ListItemClass{
  email: string;
  role: string;
}
