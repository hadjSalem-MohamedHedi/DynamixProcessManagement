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
  selector: 'app-notefrais',
  templateUrl: './notefrais.component.html',
  styleUrls: ['./notefrais.component.scss']
})
export class NotefraisComponent implements OnInit {
  private AddNoteFrais = environment.apiUrl + 'AddNoteFrais/';
  private getcons = environment.apiUrl + 'getconsultant/';

  response: any;
  getuser: any;

  myemail: string;

  NoteForm: FormGroup;
  cin: string;
  mail: string ;
  note ={
    consultant:'',
    date:'',
    motif:'',
    montant:'',    
    mois:'',    
  }
  itemList: AngularFireList<any>;
  itemArray = [] ;

  constructor(private httpClient: HttpClient,public afAuth: AngularFireAuth , public router: Router ,public db: AngularFireDatabase ) {
    this.itemList = db.list('Comptes');
  }

  ngOnInit() {

    this.myemail = localStorage.getItem('myemail');
console.log("cin : +++ "+this.cin)
    this.httpClient.get(this.getcons+this.myemail+"/"+"0")
    .subscribe((response) => {
      this.getuser = response;
      });

    this.NoteForm=new FormGroup({
      consultant : new FormControl(),
      date : new FormControl(),
      motif : new FormControl(),
      montant : new FormControl(),      
      mois : new FormControl(),      
    })

    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let y =action.payload.toJSON()
       this.itemArray.push(y as ListItemClass)
 
     })
    })

  }


  onSubmit(){
    this.note.consultant=this.NoteForm.controls['consultant'].value;
    this.note.date=this.NoteForm.controls['date'].value;
    this.note.motif=this.NoteForm.controls['motif'].value;
    this.note.montant=this.NoteForm.controls['montant'].value;
    this.note.mois=this.NoteForm.controls['mois'].value;
    
    this.httpClient.get(this.AddNoteFrais+this.note.consultant+"/"+this.note.date+"/"+this.note.motif+"/"+this.note.montant+"/"+this.note.mois)
    .subscribe((response) => {
      this.response = response;
      });
      
      
  }


}


export class ListItemClass{
  nom: string ;
  prenom: string;
  email: string;
  role: string;
}
