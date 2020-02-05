import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../entities/Customer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {


  private apiPersons = environment.apiUrl + 'ListeConsultant';
  constructor(private httpClient: HttpClient) { }

  getmsj() {
    return this.httpClient.get(this.apiPersons);
}
  loadCustomers(): Observable<Customer[]> {
    console.log('customer services');
    return this.httpClient.get<Customer[]>(this.apiPersons);
  }
}
