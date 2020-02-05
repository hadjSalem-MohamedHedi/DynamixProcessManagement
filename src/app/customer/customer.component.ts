import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../Services/customer-services.service';
import { Customer } from '../entities/Customer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   /* console.log(this.CustomerServicesServices.getmsj());
    this.CustomerServicesServices.loadCustomers().subscribe((data) => {console.log(data);
    }); */
    //console.log('ngonit');

    this.httpClient.get<Customer[]>(this.apiPersons)
    .subscribe((response) => {
      this.response = response;
      });

  }
  }
