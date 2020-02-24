import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  private AddCons = environment.apiUrl + 'AddConsultant/';
  response: any;

  nom: string;
  id: string;
  prenom: string;
  cin: string;

  data ={
    nom :'',
    prenom:'',
    cin:'',
    id:'',
    role :'',
    email :'',
    tel:'',
    tell:'',
    datenais:'',
    datecon:'',
    titre:'',
     }
     myemail: string;
     itemList: AngularFireList<any>;
     itemArray = [] ;
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


  InsertCons(){
    this.nom=this.data.nom;
    this.prenom=this.data.prenom;
    this.id=this.data.id;
    this.cin=this.data.cin;

    this.httpClient.get(this.AddCons+this.id+"/"+this.cin+"/"+this.nom+"/"+this.prenom+"/"+this.data.datenais+"/"+this.data.email+"/"+this.data.role+"/"+this.data.tel+"/"+this.data.tell+"/"+this.data.titre+"/"+this.data.datecon)
      .subscribe((response) => {
        this.response = response;
        });

        this.toastr.success('Ajoue du Consultant avec success !!',' success ');
       this.router.navigate(['/Consultants']);

}

}

export class ListItemClass{
  email: string;
  role: string;
}