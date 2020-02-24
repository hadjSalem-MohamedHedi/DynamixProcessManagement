import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';


import * as $ from 'jquery';

import { Consultant } from '../entities/consultant';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Local } from 'protractor/built/driverProviders';
import {FormGroup , FormControl} from '@angular/forms'

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  providers: [DatePipe]

})
export class AdministrationComponent implements OnInit {
  private apiPersons = environment.apiUrl + 'ListeConsultantPresence';
  private apiPres= environment.apiUrl + 'AddPres/';
  private AddPresD= environment.apiUrl + 'AddPresD/';
  private checkPres= environment.apiUrl + 'SelectPres/';
  private ListeConge = environment.apiUrl + 'ListeConge/';
  private repcong = environment.apiUrl + 'repcong/';
  private ListeNote = environment.apiUrl + 'ListeNote/';

  mois: BigInteger ;
  consultant: Consultant[];
  consultants=[];
  response: any;
  responseP: any;
  responseA: any;
  responseConge: any;
  responseCons: any;
  responseListeNote: any;
  presence: any;
  mail: string;
  myDate = new Date();
  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  NoteForm: FormGroup;

  constructor(private datePipe: DatePipe ,public fire: AngularFireAuth,public db: AngularFireDatabase  ,private httpClient: HttpClient,public router: Router, private toastr: ToastrService ) {
  this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

	this.itemList = db.list('Comptes');

  this.fire.authState.subscribe(auth=>{
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

    this.NoteForm=new FormGroup({
      mois : new FormControl(),
      
    })

    this.httpClient.get<Consultant[]>(this.ListeConge)
    .subscribe((response) => {
      this.responseConge = response;

      });



    this.httpClient.get<Consultant[]>(this.apiPersons)
    .subscribe((response) => {
      this.response = response;

      });



    $(document).ready(function(){

   //   $("#content").load('administration.component.ts');

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

      this.httpClient.get<Consultant[]>(this.AddPresD+cin+"/"+date)
      .subscribe((response) => {
        this.responseP = response;
        });
  }

  absent(cin,date,status){
    console.log("date = "+ date+" id "+"/"+status+cin)
    
  this.httpClient.get<Consultant[]>(this.apiPres+cin+"/"+date+"/"+status)
  .subscribe((response) => {
    this.response = response;   
    });

    this.httpClient.get<Consultant[]>(this.AddPresD+cin+"/"+date)
    .subscribe((response) => {
      this.responseA = response;
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


selectnote(){
  this.mois=this.NoteForm.controls['mois'].value;
  this.httpClient.get<Consultant[]>(this.ListeNote+this.mois)
  .subscribe((response) => {
    this.responseListeNote = response;
    });

  console.log("mois : "+this.mois)
}



}



  
export class ListItemClass{
  email: string;
  role: string;
}
