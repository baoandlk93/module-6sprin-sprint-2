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
  pageNumber = 1;
  pageSize = 5;
  name = '';
  total$: Observable<number>;
  carIdDelete: number;
  carNameDelete: string;
  totalElements: number;
  allCars: Observable<Car[]>;
  sortOptions: SelectItem[];
  sortOrder: number;

  sortField: string;
  sortKey: string;
  responsiveOptions: any;


  constructor(private service: CarService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.paginate();
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
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
