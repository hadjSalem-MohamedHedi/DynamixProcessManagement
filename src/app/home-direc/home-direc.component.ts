import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-direc',
  templateUrl: './home-direc.component.html',
  styleUrls: ['./home-direc.component.scss']
})
export class HomeDirecComponent implements OnInit {
  private isLoggedIn: boolean=true;
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth ,  public router: Router) {
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
