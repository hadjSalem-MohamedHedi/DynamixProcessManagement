import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;
  private isLoggedIn: boolean=true;
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth ,  public router: Router ,public db: AngularFireDatabase) {
    this.itemList = db.list('Comptes');

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.isLoggedIn=true;
        localStorage.setItem('isLoggedIn','true')
        console.log("user connecter ");
      }
      else {
      this.isLoggedIn=false
      console.log("user non connecter ");
    }
    });
  }

  ngOnInit() {


    this.myemail = localStorage.getItem('myemail');

    this.itemList.snapshotChanges().subscribe(actions=>{
     actions.forEach(action=>{
      let y =action.payload.toJSON()
      this.itemArray.push(y as ListItemClass)

    })
   })



    $(document).ready(function(){

      $("#btnprofi").click(function(){
        $("#profile").fadeIn("slow");
        $("#password").hide();
        $("#competence").hide();
        $("#image").hide();
        $("#cv").hide();
      });



      $("#btnpass").click(function(){
        $("#password").fadeIn("slow");
        $("#profile").hide();
        $("#competence").hide();
        $("#image").hide();
        $("#cv").hide();
      });


      
      $("#btncomp").click(function(){
        $("#competence").fadeIn("slow");
        $("#profile").hide();
        $("#password").hide();
        $("#image").hide();
        $("#cv").hide();
      });


    
      $("#btnimg").click(function(){
        $("#image").fadeIn("slow");
        $("#profile").hide();
        $("#password").hide();
        $("#competence").hide();
        $("#cv").hide();
      });



      
    
      $("#btncv").click(function(){
        $("#cv").fadeIn("slow");
        $("#profile").hide();
        $("#password").hide();
        $("#competence").hide();
        $("#image").hide();
      });

    });

  }

}

export class ListItemClass{
  email: string;
  nom: string;
  prenom: string;
  role: string;
}
