import { Injectable } from '@angular/core';
import {IContract} from "../model/i-contract";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenStorageService} from "./token-storage.service";
import {IContractDto} from "../dto/i-contract-dto";
const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  httpOptions: any;

  constructor(private http:HttpClient,
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

  addFavourite(contract:IContractDto): Observable<IContractDto> {
    console.log(this.http.post<IContractDto>(API_URL + '/order/like',contract));
    return this.http.post<IContractDto>(API_URL + '/order/like',contract);
  }
  getContractList(id:number):Observable<IContract>{
    return this.http.get<IContract>(API_URL + '/order/list/' + id)
  }
}
