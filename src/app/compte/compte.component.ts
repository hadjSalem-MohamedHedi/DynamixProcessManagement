import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

import 'firebase/database';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  private AddCons = environment.apiUrl + 'AddConsultant/';
  response: any;
  euror: string= '';

  email: string = '';
  password: string= '';

  id: string = '' ;
  nom: string;
  prenom: string;
  cin: string;
  role: string;



  constructor(public fire: AngularFireAuth , public router: Router , private httpClient: HttpClient , private toastr: ToastrService) {
   }

  ngOnInit() {
  }


  Registre(){

  console.log(this.nom);
  console.log(this.prenom);
  console.log(this.id);
  console.log(this.cin);

    this.httpClient.get(this.AddCons+this.id+"/"+this.cin+"/"+this.nom+"/"+this.prenom+"/"+this.email+"/"+this.role)
      .subscribe((response) => {
        this.response = response;
        });
     // this.toastr.success('Ajoue du Consultant avec success !!', 'NavX ');



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
