import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from '../entities/iperson';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonneService {

  constructor(private httpClient: HttpClient) { }

  loadPersons(): Observable<IPerson[]> {
    return this.httpClient.get<IPerson[]>('http://localhost:57885/api/Personne');
  }
}
