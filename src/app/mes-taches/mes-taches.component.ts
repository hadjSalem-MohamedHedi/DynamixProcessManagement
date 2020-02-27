import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {FormGroup , FormControl} from '@angular/forms'

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-mes-taches',
  templateUrl: './mes-taches.component.html',
  styleUrls: ['./mes-taches.component.scss']
})
export class MesTachesComponent implements OnInit {
  private UpdatestateUrl = environment.apiUrl + 'updatestattask/';
  responseupdatestate: any;

  private getcons = environment.apiUrl + 'getconsultant/';
  responseGetCons: any;

  private ListeTachURl = environment.apiUrl + 'ListeTachCons/';
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

  gettask(id){
    this.httpClient.get(this.ListeTachURl+id)
    .subscribe((response) => {
      this.responseListeTach = response;
      });
  }

}

export class ListItemClass{
  email: string;
  role: string;
}