import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import {FormGroup , FormControl} from '@angular/forms'

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-demand-auto',
  templateUrl: './demand-auto.component.html',
  styleUrls: ['./demand-auto.component.scss']
})
export class DemandAutoComponent implements OnInit {

 
    private AddAuto = environment.apiUrl + 'AddAuto/';
    private getcons = environment.apiUrl + 'getconsultant/';
  
    response: any;
    responseCong: any;
    getuser: any;
    itemList: AngularFireList<any>;
    itemArray = [] ;
    myemail: string;
  
    CongeForm: FormGroup;
    cin: string;
    mail: string ;
    data ={
      mail :''
    }
    conge ={
      nom:'',
      date:'',
      heuredu:'',
      heureau:'',
      cin:' '
    }
    constructor(private httpClient: HttpClient,public afAuth: AngularFireAuth , public router: Router ,public db: AngularFireDatabase ) {
      this.itemList = db.list('Comptes');
    }
    ngOnInit() {
      this.data.mail = localStorage.getItem('myemail');
  console.log("cin : +++ "+this.cin)
      this.httpClient.get(this.getcons+this.data.mail+"/"+"0")
      .subscribe((response) => {
        this.getuser = response;
        });
  
      console.log('this.mail '+this.data.mail)
      
    
  
  
      this.CongeForm=new FormGroup({
        nom : new FormControl(),
        date : new FormControl(),
        heureau : new FormControl(),
        heuredu : new FormControl(),    
        cin : new FormControl(),    
      })
  
      this.myemail = localStorage.getItem('myemail');
  
      this.itemList.snapshotChanges().subscribe(actions=>{
       actions.forEach(action=>{
        let y =action.payload.toJSON()
        this.itemArray.push(y as ListItemClass)
  
      })
     })
    }
  
    getlist(){
      this.httpClient.get(this.getcons+this.data.mail+"/"+"0")
      .subscribe((response) => {
        this.responseCong = response;
        });
    }
   
    onSubmit(){
      this.conge.nom=this.CongeForm.controls['nom'].value;
      this.conge.date=this.CongeForm.controls['date'].value;
      this.conge.heuredu=this.CongeForm.controls['heuredu'].value;
      this.conge.heureau=this.CongeForm.controls['heureau'].value;
      this.conge.cin=this.CongeForm.controls['cin'].value;
      this.httpClient.get(this.AddAuto+this.conge.cin+"/"+this.conge.nom+"/"+this.conge.date+"/"+this.conge.heuredu+"/"+this.conge.heureau+"/"+"Court"+"/"+"EnAttente")
      .subscribe((response) => {
        this.response = response;
        });
  console.log('l cin  '+this.conge.cin)
        
        
    }
  
  }
  
  
  export class ListItemClass{
    nom: string ;
    prenom: string;
    email: string;
    role: string;
  }
  