import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
