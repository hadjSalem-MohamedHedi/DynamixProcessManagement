import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../Services/customer-services.service';
import { Customer } from '../entities/Customer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  private apiPersons = environment.apiUrl + 'ListeClient';
  persons: Customer[];
  msj: '';
  response: any;
  myemail: string;
  itemList: AngularFireList<any>;
  itemArray = [] ;

  constructor(private httpClient: HttpClient,public fire: AngularFireAuth,public db: AngularFireDatabase ) { 
    
	this.itemList = db.list('Comptes');

  this.fire.authState.subscribe(auth=>{
    if(auth){
      this.myemail = auth.email;
    }
   });
  }

  ngOnInit() {
    this.httpClient.get<Customer[]>(this.apiPersons)
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
  }


  export class ListItemClass{
    email: string;
    role: string;
  }
  