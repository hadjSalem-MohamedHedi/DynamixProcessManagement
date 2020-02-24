import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-home-direc',
  templateUrl: './home-direc.component.html',
  styleUrls: ['./home-direc.component.scss']
})
export class HomeDirecComponent implements OnInit {
  private isLoggedIn: boolean=true;
  user: Observable<firebase.User>;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;

  constructor(public afAuth: AngularFireAuth ,public db: AngularFireDatabase ) {
    this.itemList = db.list('Comptes');

    this.afAuth.authState.subscribe(auth=>{
      if(auth){
        this.myemail = auth.email;
      }
     });


     this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let y =action.payload.toJSON()
       this.itemArray.push(y as ListItemClass)
 
     })
    })

  }

  ngOnInit() {
    $(document).ready(function(){
      $("#Dashboard").click(function(){
        $("#dashboard").fadeIn("slow");
        $("#plan").hide();
        $("#today").hide();
        $("#journal").hide();
      });

      $("#Plan").click(function(){
        $("#dashboard").hide();
        $("#plan").fadeIn("slow");
        $("#today").hide();
        $("#journal").hide();
      });


      $("#Today").click(function(){
        $("#dashboard").hide();
        $("#plan").hide();
        $("#today").fadeIn("slow");
        $("#journal").hide();

      });

      $("#Journal").click(function(){
        $("#dashboard").hide();
        $("#plan").hide();
        $("#today").hide();
        $("#journal").fadeIn("slow");

      });

    });
  }

}


export class ListItemClass{
  email: string;
  role: string;
}
