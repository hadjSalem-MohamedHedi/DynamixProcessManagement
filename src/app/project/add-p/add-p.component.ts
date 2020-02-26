import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';

@Component({
  selector: 'app-add-p',
  templateUrl: './add-p.component.html',
  styleUrls: ['./add-p.component.scss']
})
export class AddPComponent implements OnInit {
  private AddProject = environment.apiUrl + 'AddProject/';
  responseAddProject: any;

  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;
project= {
  titre :'',
  description :'',
  datecre :'',
  datedeb :'',
  datefin :'',
}
    constructor(public fire: AngularFireAuth,public db: AngularFireDatabase ,private httpClient: HttpClient,public router: Router , private toastr: ToastrService) {
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
  }

  InsertProject(){

    this.httpClient.get(this.AddProject+this.project.titre+"/"+this.project.description+"/"+this.project.datecre+"/"+this.project.datedeb+"/"+this.project.datefin)
      .subscribe((response) => {
        this.responseAddProject = response;
        });
}

}

export class ListItemClass{
  email: string;
  role: string;
}