import { Component, OnInit } from '@angular/core';
import { Consultant } from '../entities/consultant';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  constructor(private httpClient: HttpClient,public router:Router) { }


  ngOnInit() {
    this.httpClient.get<Consultant[]>(this.apiPersons)
    .subscribe((response) => {
      this.response = response;

      });
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
      this.router.navigate(['/Consultants']);

  }

}
