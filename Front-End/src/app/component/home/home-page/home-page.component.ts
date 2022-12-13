import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Car} from "../../../model/i-car";
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {CarService} from "../../../service/car.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pageNumber = 0;
  pageSize = 5;
  name = '';
  total$: Observable<number>;
  totalElements: number;
  allCars: Observable<Car[]>;
  responsiveOptions: any;


  constructor(private service: CarService) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.service.paginate(this.pageNumber, this.pageSize, this.name).subscribe(data => {
      console.log(data.content);
      this.allCars = new BehaviorSubject<Car[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
      this.totalElements = data.totalElements;

    },error =>{
      console.log(error)
    });
  }
}
