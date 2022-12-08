import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  images: any[];
  responsiveOptions: any;
  id: number;
  car: Car;

  constructor(private service: CarService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.getCar(this.id);
    window.scroll(0,0);
  }

  getCar(id: number){
    this.service.getCarById(id).subscribe( data =>{
      this.car = data;
    } )
  }
}
