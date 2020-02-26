import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Consultant } from '../entities/consultant';
import {FormGroup , FormControl} from '@angular/forms'

@Component({
  selector: 'app-detaitsprojects',
  templateUrl: './detaitsprojects.component.html',
  styleUrls: ['./detaitsprojects.component.scss'],

})
export class DetaitsprojectsComponent implements OnInit {
  ReleaseForm: FormGroup;
Release={
  titre:'',
  desc:'',
  datedeb:'',
  datefin:''
}

  private AddBesoin = environment.apiUrl + 'AddBesoin/';
  private listeBesoin = environment.apiUrl + 'ListeBesoin/';
  private listecons = environment.apiUrl + 'ListeConsultant';
  private addconproj = environment.apiUrl + 'addconproj/';
  private deleteteam = environment.apiUrl + 'deletconsproj/';
  private ListeConsinproj = environment.apiUrl + 'listeconstinproj/';
  private addreleaseUrl = environment.apiUrl + 'addreleasetoproject/';
  private listereleaseURL = environment.apiUrl + 'ListereleaseProj/';

  response: any;
  responselistebesoin: any;
  responselistcons: any;
  responseaddconproj: any;
  responselisteprojcons: any;
  responsedeletprojcons: any;
  responseaddrelease: any;
  responselisterelease: any;
  id:any;
  titre:'';
  desc:'';
  datecre:'';
  constructor(public route:ActivatedRoute,public router:Router,private httpClient: HttpClient ,public location:Location) {
    this.route.params.subscribe(params=>{
      this.id=params
        console.log(""+this.id)
      });
      this.id=this.id.id;

   }

  ngOnInit() {
    this.ReleaseForm=new FormGroup({
      titre : new FormControl(),
      desc : new FormControl(),
      datedeb : new FormControl(),
      datefin : new FormControl(),
         
    })

    this.httpClient.get(this.ListeConsinproj+this.id)
    .subscribe((response) => {
      this.responselisteprojcons = response;
      });

      this.httpClient.get(this.listereleaseURL+this.id)
      .subscribe((response) => {
        this.responselisterelease = response;
        });
  

    this.httpClient.get<Consultant[]>(this.listecons)
    .subscribe((response) => {
      this.responselistcons = response;
      });

    this.httpClient.get(this.listeBesoin+this.id)
    .subscribe((response) => {
      this.responselistebesoin = response;
      });

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

      $("#hide01").click(function(){
        $("#desc-besoin").fadeIn("slow");
        $("#hide").fadeIn("slow");
        $("#hide01").hide();
          });
      $("#hide").click(function(){
            $("#desc-besoin").fadeOut();
            $("#hide").hide();
            $("#hide01").fadeIn();
              });

      $("#addrelease").click(function(){
        $(".createrelease").fadeIn();
        $("#quash").show();
        $("#addrelease").hide();
      })       

      $("#quash").click(function(){
        $(".createrelease").fadeOut();
        $("#quash").hide();
        $("#addrelease").show();
      })        


    });
  }

  Insertbesoin(){
    this.httpClient.get(this.AddBesoin+this.titre+"/"+this.desc+"/"+this.datecre+"/"+this.id)
    .subscribe((response) => {
      this.response = response;
      });
  }


  addconsproj(cin){
    this.httpClient.get(this.addconproj+cin+"/"+this.id)
    .subscribe((response) => {
      this.responseaddconproj = response;
      });
 
      
  }

  deletefromteam(cin){
        this.httpClient.get(this.deleteteam+cin+"/"+this.id)
        .subscribe((response) => {
          this.responsedeletprojcons = response;
          });
          this.router.navigateByUrl("/Project", { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]);
          });
      }

      AddRelease(){
        this.Release.titre=this.ReleaseForm.controls['titre'].value;
        this.Release.desc=this.ReleaseForm.controls['desc'].value;
        this.Release.datedeb=this.ReleaseForm.controls['datedeb'].value;
        this.Release.datefin=this.ReleaseForm.controls['datefin'].value;

        this.httpClient.get(this.addreleaseUrl+this.id+"/"+this.Release.titre+"/"+this.Release.desc+"/"+this.Release.datedeb+"/"+this.Release.datefin)
        .subscribe((response) => {
          this.responseaddrelease = response;
          });
      }


}
