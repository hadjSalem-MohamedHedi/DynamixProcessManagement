import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  mail: string = '';
  pswd: string= '';
  euror: string= '';


  constructor(public fire: AngularFireAuth , public router: Router) {
    let status = localStorage.getItem('isLoggedIn');

  }

  ngOnInit() {
    $(document).ready(function(){
      $("#forgetpasswordid").click(function(){
        $("#login-form").slideUp();
        $("#reset-form").slideDown();
      });
      $("#needaccountid").click(function(){
        $("#login-form").slideUp();
        $("#needaccount").slideDown();
      });


      $("#loginbtn2").click(function(){
        $("#login-form").slideDown();
        $("#reset-form").slideUp();
      });
      $("#loginbtn3").click(function(){
        $("#login-form").slideDown();
        $("#needaccount").slideUp();
      });
    });

  }

  Login(){
    this.fire.auth.signInWithEmailAndPassword(this.mail,this.pswd)
    .then(user=>{
      console.log(this.mail,this.pswd)

      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('myemail', this.mail);
          location.reload();
          this.router.navigate(['/Customer']);
        }
       });


    }).catch(error =>{
      console.error(error);
      this.euror = "Password ou Email Invalide";
      console.log('no auth ');
    })

  }


}
