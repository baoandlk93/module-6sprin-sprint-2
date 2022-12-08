import {Component, OnInit} from '@angular/core';
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
    page: number = 0;
    limit: number = 18;
    name: string = '';
    totalPage: Observable<number>;
    total: Observable<number>;
    carList$: Observable<Car[]>;

    sortField: any;
    sortOrder: any;

    constructor(private service: CarService) {
    }

    ngOnInit(): void {
        this.getListCar();
    }

    getListCar() {
        this.service.paginate(this.page, this.limit, this.name).subscribe(data => {
            console.log(data);
            this.carList$ = new BehaviorSubject(data.content);
            this.total = new BehaviorSubject(data.totalElements);
            this.totalPage = new BehaviorSubject(data.totalPages);
        })
    }

    onPageChange(event) {
        this.page = event.first;
        this.getListCar();
    }

    showDetail(id: number) {
        this.service.getCarById(id).subscribe(data =>{

        })
    }
}
