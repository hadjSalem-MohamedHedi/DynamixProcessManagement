import { Component, OnInit } from '@angular/core';
import { Consultant } from '../entities/consultant';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';
@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss']
})
export class ConsultantsComponent implements OnInit {
  private apiPersons = environment.apiUrl + 'ListeConsultant';
  private DeletePer = environment.apiUrl + 'DeleteConsultant/';
  private AddCons = environment.apiUrl + 'AddConsultant/';

  consultant: Consultant[];
  consultants=[];
  msj: '';
  response: any;

  nom: string;
  id: string;
  prenom: string;
  cin: string;

  data ={
    nom :'',
    prenom:'',
    cin:'',
    id:''
  }
  
  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;
  constructor(public fire: AngularFireAuth,private httpClient: HttpClient,public router: Router, private toastr: ToastrService,public db: AngularFireDatabase  ) { 

    
	this.itemList = db.list('Comptes');

  this.fire.authState.subscribe(auth=>{
    if(auth){
      this.myemail = auth.email;
    }
   });

  }


  ngOnInit() {
    this.httpClient.get<Consultant[]>(this.apiPersons)
    .subscribe((response) => {
      this.response = response;
      });

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
    this.httpClient.get(this.AddCons+this.id+"/"+this.cin+"/"+this.nom+"/"+this.prenom)
      .subscribe((response) => {
        this.response = response;
        });

  }

    affiche(){
      this.httpClient.get<Consultant[]>(this.apiPersons)
       .subscribe((response) => {
    this.response = response;
    });
}

  onDelete(id){

    this.httpClient.get(this.DeletePer + id)
    .subscribe((response) => {
      this.response = response;
      });
      this.toastr.success('Suppression du Consultant avec success !!',' success ');
      this.router.navigate(['/Consultants']);
      //location.reload();


  }

}


export class ListItemClass{
  email: string;
  role: string;
}
