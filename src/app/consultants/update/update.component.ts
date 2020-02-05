import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../entities/consultant';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup , FormControl} from '@angular/forms'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

employeeForm: FormGroup;

  id:any;
  private UpdCons = environment.apiUrl + 'SelectConsu/';
  private UpddateCons = environment.apiUrl + 'UpdateConsu/';

  consultant: Consultant[];
  consultants=[];
  itemArray=[];

  msj: '';
  response: any;

  nom: string;
  prenom: string;
  cin: string;

  data ={
    nom :'',
    prenom:'mohaPrenomTest',
    cin:'',
    id:''
  }

  constructor(private httpClient: HttpClient,public route:ActivatedRoute,public router:Router) {
    this.route.params.subscribe(params=>{
      this.id=params
        console.log("id mel rouer"+this.id.id)
      });
  }

  ngOnInit() {

      $(document).ready(function(){
        $("#Dashboard").click(function(){
          $("#dashboard").fadeIn("slow");
          $("#plan").hide();
          $("#today").hide();
          $("#journal").hide();
        });

        $("#Plan").click(function(){
          $("#dashboard").hide();
          $("#plan").fadeIn("slow");
          $("#today").hide();
          $("#journal").hide();
        });


        $("#Today").click(function(){
          $("#dashboard").hide();
          $("#plan").hide();
          $("#today").fadeIn("slow");
          $("#journal").hide();

        });

        $("#Journal").click(function(){
          $("#dashboard").hide();
          $("#plan").hide();
          $("#today").hide();
          $("#journal").fadeIn("slow");


        });

      });


    this.employeeForm=new FormGroup({
      nom : new FormControl(),
      prenom : new FormControl(),
      cin : new FormControl(),
      id : new FormControl()
    })
    this.httpClient.get<Consultant[]>(this.UpdCons + this.id.id)
    .subscribe((response) => {
      this.response = response;

            });




            }

  onSubmit(){
    this.data.nom=this.employeeForm.controls['nom'].value;
    this.data.prenom=this.employeeForm.controls['prenom'].value;

    this.httpClient.get(this.UpddateCons+this.id.id+"/"+this.data.nom+"/"+this.data.prenom)
      .subscribe((response) => {
        this.response = response;
        });
        this.router.navigate(['/Consultants']);
  }

}
export class ListItemClass{
  $key:string;
  nom:string;
  prenom:string;
  datenais:string;

}
