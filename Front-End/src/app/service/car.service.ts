import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchResult} from "../model/search-result";
import {Car} from "../model/i-car";
import {TokenStorageService} from "./token-storage.service";
import {IGear} from "../model/i-gear";
import {IBrand} from "../model/i-brand";
import {IContract} from "../model/i-contract";
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
    // console.log(API_URL + '/car/list' + '?page=' + page + '&size=' + limit + '&name=' + name);
    return this.http.get<SearchResult<Car>>(API_URL + '/car/list?page=' + (page) + '&size=' + limit + '&name=' + name);
  }

  getCarByCustomerId(id: number): Observable<SearchResult<Car>>{
    return this.http.get<SearchResult<Car>>(API_URL + '/car/list/'+ id);
  }

  createCar(car: Car): Observable<HttpEvent<Car>> {
    return this.http.post<Car>(API_URL + '/car/save', car,this.httpOptions);
  }

  editCar(id: number, car: Car): Observable<Car> {
    return this.http.patch<Car>(API_URL + '/car/edit/' + id, car);
  }

  deleteCar(id: number): Observable<HttpEvent<void>> {
    // console.log(API_URL + '/car/delete/' + id)
    return this.http.delete<void>(API_URL + '/car/delete/' + id,this.httpOptions);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(API_URL + '/car/detail/' + id);
  }

  getGearList(): Observable<IGear>{
    return this.http.get(API_URL + '/gear/list');
  }

  getBrandList(): Observable<IBrand>{
    return this.http.get(API_URL + '/brand/list');
  }

  addFavourite(contract:IContract): Observable<HttpEvent<IContract>> {
    return this.http.get<IContract>(API_URL + '/order/like', this.httpOptions);
  }
}
