import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


import * as $ from 'jquery';

import { Consultant } from '../entities/consultant';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  providers: [DatePipe]

})
export class AdministrationComponent implements OnInit {
  private apiPersons = environment.apiUrl + 'ListeConsultantPresence';
  private apiPres= environment.apiUrl + 'AddPres/';
  private checkPres= environment.apiUrl + 'SelectPres/';
  private ListeConge = environment.apiUrl + 'ListeConge/';
  private repcong = environment.apiUrl + 'repcong/';


  consultant: Consultant[];
  consultants=[];
  response: any;
  responseConge: any;
  responseCons: any;
  presence: any;
  mail: string;
  myDate = new Date();

  constructor(private datePipe: DatePipe , private httpClient: HttpClient,public router: Router, private toastr: ToastrService ) {
   }

  ngOnInit() {


    this.httpClient.get<Consultant[]>(this.ListeConge)
    .subscribe((response) => {
      this.responseConge = response;

      });



    this.httpClient.get<Consultant[]>(this.apiPersons)
    .subscribe((response) => {
      this.response = response;

      });



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


  accepter(id,status){
    this.httpClient.get<Consultant[]>(this.repcong+id+"/"+status)
    .subscribe((response) => {
      this.response = response;
      });
  }

  Refuser(id,status){
    this.httpClient.get<Consultant[]>(this.repcong+id+"/"+status)
    .subscribe((response) => {
      this.response = response;
      });
  }

  present(cin,date,status){
      console.log("date = "+ date+" id "+"/"+status+cin)
      
    this.httpClient.get<Consultant[]>(this.apiPres+cin+"/"+date+"/"+status)
    .subscribe((response) => {
      this.response = response;

      });
  }

  absent(cin,date,status){
    console.log("date = "+ date+" id "+"/"+status+cin)
    
  this.httpClient.get<Consultant[]>(this.apiPres+cin+"/"+date+"/"+status)
  .subscribe((response) => {
    this.response = response;

    });
}

check(cin,date){
  console.log("date = "+ date+" id "+"/" +cin)
  this.httpClient.get<Consultant[]>(this.checkPres+cin+"/"+date)
  .subscribe((presence) => {
    this.presence = presence;
  
    });

    console.log("date = "+ date+" id "+"/" +cin+" presence = "+this.presence)


}



}
