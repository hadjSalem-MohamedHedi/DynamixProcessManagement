import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  private AddCons = environment.apiUrl + 'AddConsultant/';
  itemList: AngularFireList<any>;
  itemList1: AngularFireList<any>;
  itemArray = [] ;

  response: any;
  euror: string= '';

  email: string = '';
  password: string= '';

  id: string = '' ;
  nom: string;
  prenom: string;
  cin: string;
  role: string;

  myrole :string;
  myemail :string;


  constructor(public fire: AngularFireAuth , public router: Router , private httpClient: HttpClient , private toastr: ToastrService , public db: AngularFireDatabase ) {
    this.itemList = db.list('Comptes');
    this.itemList1 = db.list('Comptes');

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


  Registre(){



    this.httpClient.get(this.AddCons+this.id+"/"+this.cin+"/"+this.nom+"/"+this.prenom+"/"+this.email+"/"+this.role)
      .subscribe((response) => {
        this.response = response;
        });
     // this.toastr.success('Ajoue du Consultant avec success !!', 'NavX ');
     this.itemList.push({
      nom :this.nom,
      prenom :this.prenom,
      email :this.email,
      role:this.role,

    })

    this.fire.auth.createUserWithEmailAndPassword(this.email , this.password)
    .then(user=>{
      console.log(this.email,this.password)
      this.toastr.success('Ajoue du Consultant avec success !!', 'FireBase ');

    }).catch(error=>{
      console.error(error) ;
      this.toastr.warning('Echec  !!', 'FireBase ');

    })
  }




}
export class ListItemClass{
  email: string;
  role: string;
}
