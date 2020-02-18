import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import {FormGroup , FormControl} from '@angular/forms'

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-monrepos',
  templateUrl: './monrepos.component.html',
  styleUrls: ['./monrepos.component.scss']
})
export class MonreposComponent implements OnInit {
  private getcons = environment.apiUrl + 'getconsultant/';
  private mesconges = environment.apiUrl + 'mesconges/';

  data ={
    mail :''
  }
  responseCong: any;
  responsemesCongs: any;

  constructor(private httpClient: HttpClient,public afAuth: AngularFireAuth , public router: Router ,public db: AngularFireDatabase ) {
  }

  ngOnInit() {
    $(document).ready(function(){
      $("#btnauto").click(function(){
        $(".responseauto").show();
        $("#btnauto").hide();
        $(".listauto").css("width","60%")
      });
      $("#fermerauto").click(function(){
        $(".responseauto").hide();
        $("#btnauto").show();
        $(".listauto").css("width","40%")
      });

      $("#btncong").click(function(){
        $(".responsecong").show();
        $("#btncong").hide();
        $(".listecong").css("width","60%")
      });

      $("#fermercong").click(function(){
        $(".responsecong").hide();
        $("#btncong").show();
        $(".listecong").css("width","40%")
      });


      
    });





    this.data.mail = localStorage.getItem('myemail');

    this.httpClient.get(this.getcons+this.data.mail+"/"+"0")
    .subscribe((response) => {
      this.responseCong = response;
      });
  }


  maliste(cin){
    this.httpClient.get(this.mesconges+cin)
    .subscribe((response) => {
      this.responsemesCongs = response;
      });  }

}
