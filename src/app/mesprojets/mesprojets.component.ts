import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {FormGroup , FormControl} from '@angular/forms'

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-mesprojets',
  templateUrl: './mesprojets.component.html',
  styleUrls: ['./mesprojets.component.scss']
})
export class MesprojetsComponent implements OnInit {
  TaskForm: FormGroup;
  state:'';
  private UpdatestateUrl = environment.apiUrl + 'updatestattask/';
  responseupdatestate: any;


  private getcons = environment.apiUrl + 'getconsultant/';
  responseGetCons: any;

  private listereleaseURL = environment.apiUrl + 'ListereleaseProj/';
  responselisterelease: any;


  private getprojcons = environment.apiUrl + 'ListeProjDuCons/';
  responseGetprojCons: any;

  private DetProj = environment.apiUrl + 'DetailProject/';
  responseDetProj: any;

  private ListeSprintUrl = environment.apiUrl + 'ListeSprintRelease/';
  responseListeSprint: any;

  private ListeTachURl = environment.apiUrl + 'ListeTachSprint/';
  responseListeTach: any;

  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  
  data ={
    mail :''
  }

    constructor(private httpClient: HttpClient,public fire: AngularFireAuth,public db: AngularFireDatabase ){	

	this.itemList = db.list('Comptes');

      this.fire.authState.subscribe(auth=>{
        if(auth){
          this.myemail = auth.email;
        }
       });

 }

  ngOnInit() {
    this.TaskForm=new FormGroup({
      state : new FormControl()      
    })
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
       let y =action.payload.toJSON()
       this.itemArray.push(y as ListItemClass)
 
     })
    })


    this.data.mail = localStorage.getItem('myemail');

    this.httpClient.get(this.getcons+this.data.mail+"/"+"0")
    .subscribe((response) => {
      this.responseGetCons = response;
      });
   
  }
  getproj(cin){
    this.httpClient.get(this.getprojcons+cin)
    .subscribe((response) => {
      this.responseGetprojCons = response;
      });
  }

  detail(idproject){
    this.httpClient.get(this.DetProj+idproject)
    .subscribe((response) => {
      this.responseDetProj = response;
      });
  }

  getrelease(idproj){
    this.httpClient.get(this.listereleaseURL+idproj)
    .subscribe((response) => {
      this.responselisterelease = response;
      console.log("id projetc:::: "+idproj)
      });
  }

  getsprint(idrelease){
    this.httpClient.get(this.ListeSprintUrl+idrelease)
    .subscribe((response) => {
      this.responseListeSprint = response;
      });
  }

  getTache(idsprint){
    this.httpClient.get(this.ListeTachURl+idsprint)
    .subscribe((response) => {
      this.responseListeTach = response;
      });
  }


  onSubmit(taskid){
    this.state=this.TaskForm.controls['state'].value;
    this.httpClient.get(this.UpdatestateUrl+taskid+"/"+this.state)
    .subscribe((response) => {
      this.responseupdatestate = response;
      });
  
  }
}

export class ListItemClass{
  email: string;
  role: string;
}