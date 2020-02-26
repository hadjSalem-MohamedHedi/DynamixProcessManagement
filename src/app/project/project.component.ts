import { Component, OnInit } from '@angular/core';
import { Project } from '../entities/Project';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'firebase/database';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private ListeProject = environment.apiUrl + 'ListeProject/';
  Project: Project[];

  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  listeResponse: any;
  constructor(public fire: AngularFireAuth,public db: AngularFireDatabase ,private httpClient: HttpClient){	

	this.itemList = db.list('Comptes');

      this.fire.authState.subscribe(auth=>{
        if(auth){
          this.myemail = auth.email;
        }
       });

 }


  ngOnInit() {
    this.httpClient.get<Project[]>(this.ListeProject)
    .subscribe((response) => {
      this.listeResponse = response;
      });
    
 this.itemList.snapshotChanges().subscribe(actions=>{
  actions.forEach(action=>{
   let y =action.payload.toJSON()
   this.itemArray.push(y as ListItemClass)

 })
})
  }

}


  
export class ListItemClass{
  email: string;
  role: string;
}
