import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Consultant } from '../../../entities/consultant';

import * as $ from 'jquery';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {FormGroup , FormControl} from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'app-detail-sprint',
  templateUrl: './detail-sprint.component.html',
  styleUrls: ['./detail-sprint.component.scss']
})
export class DetailSprintComponent implements OnInit {
  private ListeconsURl = environment.apiUrl + 'ListeConsultant';
  responseListeCons: any;
  consultant: Consultant[];

  private addtacheurl = environment.apiUrl + 'AddTachToSprint/';
  responseAddTache: any;

  private ListeTachURl = environment.apiUrl + 'ListeTachSprint/';
  responseListeTach: any;

  TacheForm: FormGroup;
tache={
  titre:'',
  desc:'',
  datedeb:'',
  datefin:'',
  cons:''
}
  id:any;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;


   constructor(public fire: AngularFireAuth,public db: AngularFireDatabase,public route:ActivatedRoute,public router:Router,private httpClient: HttpClient ,public location:Location) {
    this.route.params.subscribe(params=>{
      this.id=params
        console.log(""+this.id)
      });
      this.id=this.id.id;

      this.itemList = db.list('Comptes');

      this.fire.authState.subscribe(auth=>{
        if(auth){
          this.myemail = auth.email;
        }
       });

   }

 
   ngOnInit() {
    this.httpClient.get<Consultant[]>(this.ListeconsURl)
    .subscribe((response) => {
      this.responseListeCons = response;
      });

    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let y =action.payload.toJSON()
       this.itemArray.push(y as ListItemClass)
    
     })
    })

    this.httpClient.get(this.ListeTachURl+this.id)
    .subscribe((response) => {
      this.responseListeTach = response;
      });
    this.TacheForm=new FormGroup({
      titre : new FormControl(),
      desc : new FormControl(),
      datedeb : new FormControl(),
      datefin : new FormControl(),
      idCons : new FormControl(),
         
    })
  }

  AddTache(){
    this.tache.titre=this.TacheForm.controls['titre'].value;
    this.tache.desc=this.TacheForm.controls['desc'].value;
    this.tache.datedeb=this.TacheForm.controls['datedeb'].value;
    this.tache.datefin=this.TacheForm.controls['datefin'].value;
    this.tache.cons=this.TacheForm.controls['idCons'].value;
  
    this.httpClient.get(this.addtacheurl+this.id+"/"+this.tache.titre+"/"+this.tache.desc+"/"+this.tache.datedeb+"/"+this.tache.datefin+"/"+this.tache.cons)
    .subscribe((response) => {
      this.responseAddTache = response;
      });
  }


 

}
export class ListItemClass{
  email: string;
  role: string;
}
