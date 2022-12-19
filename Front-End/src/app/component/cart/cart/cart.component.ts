import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import {BehaviorSubject, Observable} from "rxjs";
import {render} from "creditcardpayments/creditCardPayments";
import {MessageService} from "primeng/api";


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [MessageService]
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

    displayPosition: boolean;
    position: string;

    moneyPayment: string;
    totalMoney: string;
    carName: string;

    constructor(private service: CarService,
                private messageService: MessageService) {

    }

    ngOnInit(): void {
        this.getListCar();
        window.scroll(0,0);
    }

    loadPage(): void {
        window.location.replace('cart');
    }
    showPayment(money: number, name: string){
        this.displayPosition = true;
        this.totalMoney = money.toString();
        this.moneyPayment = (money/2).toString();
        this.carName = name;
        this.payment();
    }

    payment() {
        render(
            {
                id: '#myButtonPaypal',
                value: this.moneyPayment,
                currency: 'USD',
                onApprove: (details) => {
                    this.showSuccess();
                    this.displayPosition = false;
                    // window.setTimeout(this.loadPage,1000);
                }
            }
        );


    }
    showSuccess() {
        this.messageService.add({severity:'success', summary: 'Thanh toán thành công', detail: ' Cảm ơn bạn đã sử dụng dịch vụ'});
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
        this.service.getCarById(id).subscribe(data => {

        })
    }


}
