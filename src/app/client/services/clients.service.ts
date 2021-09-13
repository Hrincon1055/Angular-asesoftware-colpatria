import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Credit } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}
  getAccount(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:3000/accounts');
  }
  getCreditCard(): Observable<Credit[]> {
    return this.http.get<Credit[]>('http://localhost:3000/creditCard');
  }
}
