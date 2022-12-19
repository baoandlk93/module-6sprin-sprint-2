import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Car} from "../../../model/i-car";
import {MessageService, PrimeNGConfig, SelectItem} from "primeng/api";
import {CarService} from "../../../service/car.service";
import {IContract} from "../../../model/i-contract";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    providers: [MessageService]
})
export class HomePageComponent implements OnInit {
    pageNumber = 0;
    pageSize = 5;
    name = '';
    total$: Observable<number>;
    totalElements: number;
    allCars: Observable<Car[]>;
    responsiveOptions: any;

    contract: IContract;
    like: boolean;


    constructor(private service: CarService,
                private messageService: MessageService) {
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

        }, error => {
            console.log(error)
        });
    }

    addFavourite(idContract: number, idCar: number, idCustomer: number) {
        this.service.addFavourite(this.contract).subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Đã thêm vào danh sách yêu thích',
                life: 3000
            });

        });
    }
}
