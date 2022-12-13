import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchResult} from "../model/search-result";
import {Car} from "../model/i-car";
import {TokenStorageService} from "./token-storage.service";
const API_URL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class CarService {
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

  paginate(page: number, limit: number, name: string): Observable<SearchResult<Car>> {
    console.log(API_URL + '/car/list' + '?page=' + page + '&size=' + limit + '&name=' + name);
    return this.http.get<SearchResult<Car>>(API_URL + '/car/list' + '?page=' + (page) + '&size=' + limit + '&name=' + name);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(API_URL + '/car/save', car);
  }

  editCar(id: number, car: Car): Observable<Car> {
    return this.http.patch<Car>(API_URL + '/car/edit/' + id, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(API_URL + '/car/delete/' + id);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(API_URL + '/car/detail/' + id);
  }

  getUsername(): Observable<any> {
    return this.http.get<any>(API_URL + '/customer/find-username/', this.httpOptions);
  }

}
