import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {FormGroup , FormControl} from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'app-detailrelease',
  templateUrl: './detailrelease.component.html',
  styleUrls: ['./detailrelease.component.scss']
})
export class DetailreleaseComponent implements OnInit {
  private addsprintUrl = environment.apiUrl + 'AddSprintToRlease/';
  private ListeSprintUrl = environment.apiUrl + 'ListeSprintRelease/';
  responseaddrelease: any;
  responseListeSprint: any;

  SprintForm: FormGroup;
  sprint={
    titre:'',
    desc:'',
    datedeb:'',
    datefin:''
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
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let y =action.payload.toJSON()
       this.itemArray.push(y as ListItemClass)
    
     })
    })

    this.httpClient.get(this.ListeSprintUrl+this.id)
    .subscribe((response) => {
      this.responseListeSprint = response;
      });

    this.SprintForm=new FormGroup({
      titre : new FormControl(),
      desc : new FormControl(),
      datedeb : new FormControl(),
      datefin : new FormControl(),
         
    })
  }


  AddSprint(){
    this.sprint.titre=this.SprintForm.controls['titre'].value;
    this.sprint.desc=this.SprintForm.controls['desc'].value;
    this.sprint.datedeb=this.SprintForm.controls['datedeb'].value;
    this.sprint.datefin=this.SprintForm.controls['datefin'].value;
  
    this.httpClient.get(this.addsprintUrl+this.id+"/"+this.sprint.titre+"/"+this.sprint.desc+"/"+this.sprint.datedeb+"/"+this.sprint.datefin)
    .subscribe((response) => {
      this.responseaddrelease = response;
      });
  }


}



export class ListItemClass{
  email: string;
  role: string;
}
