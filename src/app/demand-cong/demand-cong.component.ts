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
  selector: 'app-demand-cong',
  templateUrl: './demand-cong.component.html',
  styleUrls: ['./demand-cong.component.scss']
})
export class DemandCongComponent implements OnInit {
  private AddConge = environment.apiUrl + 'AddConge/';
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
    motif:'',
    datedeb:'',
    datefin:'',
    nbjours:'',
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
      motif : new FormControl(),
      datedeb : new FormControl(),
      datefin : new FormControl(),
      nbjours : new FormControl(),    
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
    this.conge.datedeb=this.CongeForm.controls['datedeb'].value;
    this.conge.datefin=this.CongeForm.controls['datefin'].value;
    this.conge.motif=this.CongeForm.controls['motif'].value;
    this.conge.nbjours=this.CongeForm.controls['nbjours'].value;
    this.conge.cin=this.CongeForm.controls['cin'].value;
    this.httpClient.get(this.AddConge+this.conge.nom+"/"+this.conge.motif+"/"+this.conge.datedeb+"/"+this.conge.datefin+"/"+this.conge.nbjours+"/"+"Long"+"/"+"EnAttente/"+this.conge.cin)
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
