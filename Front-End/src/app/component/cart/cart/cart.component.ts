import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  color: string;
  page: number = 1;
  limit: number = 10;
  name: string = '';

  carList: Observable<Car[]>;
  total: Observable<number>;
  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.getListCar()
  }

  getListCar(){
    this.service.paginate(this.page, this.limit, this.name).subscribe(data =>{
      this.carList = new BehaviorSubject(data.content);
      this.total = new BehaviorSubject(data.totalElements);
    })
  }
}
