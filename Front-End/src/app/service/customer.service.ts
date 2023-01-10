import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import {TokenStorageService} from './token-storage.service';
import {SearchResult} from '../model/search-result';
import {ICustomer} from "../model/i-customer";
import {ICustomerDto} from "../dto/i-customer-dto";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_API = `${environment.api_url}`;

  httpOptions: any;
  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenService.getToken()
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getCustomer(name: string, page: number, pageSize: number): Observable<HttpEvent<SearchResult<ICustomer>>> {
    return this.http.get<SearchResult<ICustomer>>(this.URL_API + '/customer/list?nameSearch=' +
      name + '&page=' + (page - 1) + '&size=' + pageSize,this.httpOptions);
  }

  findByUsername(username: string): Observable<HttpEvent<ICustomer>> {
    return this.http.get<ICustomer>(this.URL_API + '/customer/find?username='+ username, this.httpOptions);
  }

  editObject(icustomer: ICustomer): Observable<void> {
    return this.http.patch<void>(this.URL_API + '/customer/edit/' + icustomer.id, icustomer);
  }
  saveCustomer(customer: ICustomer): Observable<ICustomerDto> {
    return this.http.post<ICustomerDto>(environment.api_url + '/customer/add', customer);
  }

  findCustomerByUsername(): Observable<any> {
    return this.http.get<ICustomer>(environment.api_url + '/customer/find-username', this.httpOptions);
  }

  editCustomer(customer: ICustomerDto, username: string): Observable<void> {
    return this.http.patch<void>(environment.api_url + '/customer/edit?username=' + username, customer);
  }
}
