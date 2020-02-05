import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from '../entities/iperson';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiPersons = environment.apiUrl + 'Personne';
  constructor(private httpClient: HttpClient) { }

  loadUsers(): Observable<IPerson[]> {
    return this.httpClient.get<IPerson[]>(this.apiPersons);
  }
}
