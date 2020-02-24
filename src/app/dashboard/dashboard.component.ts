import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
   constructor(public fire: AngularFireAuth ,public db: AngularFireDatabase ){	

	this.itemList = db.list('Comptes');

      this.fire.authState.subscribe(auth=>{
        if(auth){
          this.myemail = auth.email;
        }
       });
       this.itemList.snapshotChanges().subscribe(actions=>{
        actions.forEach(action=>{
         let y =action.payload.toJSON()
         this.itemArray.push(y as ListItemClass)
   
       })
      })
 }

  ngOnInit() {
  }

}
export class ListItemClass{
  email: string;
  role: string;
}
