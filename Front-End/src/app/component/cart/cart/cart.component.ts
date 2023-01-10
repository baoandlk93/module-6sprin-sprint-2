import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import {BehaviorSubject, Observable} from "rxjs";
import {render} from "creditcardpayments/creditCardPayments";
import {MessageService} from "primeng/api";
import {IContractDto} from "../../../dto/i-contract-dto";
import {ContractService} from "../../../service/contract.service";
import {TokenStorageService} from "../../../service/token-storage.service";
import {AuthService} from "../../../service/auth.service";
import {CustomerService} from "../../../service/customer.service";
import {ICustomer} from "../../../model/i-customer";
import {Router} from "@angular/router";


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

    roles: string[] = [];
    isCustomer = false;

    contract: IContractDto;
    username: string;
    customer: ICustomer;
    private carId: number;

    constructor(private service: CarService,
                private messageService: MessageService,
                private tokenService: TokenStorageService,
                private authService: AuthService,
                private contractService: ContractService,
                private customerService: CustomerService,
                private carService: CarService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.getListCar();
        window.scroll(0, 0);
        if (this.tokenService.isLogged()) {
            this.username = this.tokenService.getUser().username;
            this.roles = this.tokenService.getUser().roles;
            this.isCustomer = (this.roles.indexOf('ROLE_CUSTOMER') !== -1);
        }
        console.log(this.isCustomer);
    }


    createContract(id: number) {
        this.contract = new class implements IContractDto {
            car: Car;
            customer: ICustomer;
            id: number;
            startDate: string;
        }

        this.customerService.findByUsername(this.username).subscribe(data => {
            console.log(data);
            // @ts-ignore
            this.contract.customer = data;
            this.carService.getCarById(id).subscribe(data => {
                console.log(data);
                this.contract.car = data;
                this.contract.startDate = '';
                console.log(this.contract.car + 'okok');
                console.log(this.contract.customer + 'customer');
                this.contractService.addFavourite(this.contract).subscribe(() => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Đã thích',
                        detail: ' Cảm ơn bạn like'
                    });
                })
            });

        })


    }

    loadPage(): void {
        window.location.replace('login');
    }

    showPayment(money: number, name: string, carId: number) {
        console.log(this.isCustomer);
        if (this.isCustomer) {
            this.displayPosition = true;
            this.totalMoney = money.toString();
            this.moneyPayment = (money / 10).toString();
            this.carName = name;
            this.carId = carId;
            this.payment();
        }else {
            this.messageService.add({
                severity: 'error',
                summary: 'Đăng nhập',
                detail: ' Bạn phải đăng nhập trước!'
            });
            window.setTimeout(this.loadPage,1000);
        }

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
                    this.createContract(this.carId);
                }
            }
        );


    }

    showSuccess() {
        this.messageService.add({
            severity: 'success',
            summary: 'Thanh toán thành công',
            detail: ' Cảm ơn bạn đã sử dụng dịch vụ'
        });
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
