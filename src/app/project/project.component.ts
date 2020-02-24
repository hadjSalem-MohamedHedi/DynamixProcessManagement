import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  constructor(public fire: AngularFireAuth,public db: AngularFireDatabase  ,){	

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

}


  
export class ListItemClass{
  email: string;
  role: string;
}
