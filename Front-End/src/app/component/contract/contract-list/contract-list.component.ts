import {Component, OnInit} from '@angular/core';
import {IContract} from "../../../model/i-contract";
import {ICustomer} from "../../../model/i-customer";
import {Observable} from "rxjs";
import {CarService} from "../../../service/car.service";
import {MessageService} from "primeng/api";
import {render} from "creditcardpayments/creditCardPayments";
import {TokenStorageService} from "../../../service/token-storage.service";
import {CustomerService} from "../../../service/customer.service";
import {AuthService} from "../../../service/auth.service";
import {ContractService} from "../../../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  providers: [MessageService]
})
export class ContractListComponent implements OnInit {
  color: string;
  page: number = 0;
  limit: number = 18;
  name: string = '';
  totalPage: Observable<number>;
  total: Observable<number>;
  carList$: IContract;

  username: string;
  customer: ICustomer;


  sortField: any;
  sortOrder: any;

  displayPosition: boolean;
  position: string;

  moneyPayment: string;
  totalMoney: string;
  carName: string;


  constructor(private service: CarService,
              private messageService: MessageService,
              private tokenService:TokenStorageService,
              private authService: AuthService,
              private contractService: ContractService,
              private customerService: CustomerService) {

  }

  ngOnInit(): void {
    window.scroll(0,0);
    if (this.tokenService.isLogged()) {
      this.username = this.tokenService.getUser().username;
    }
    this.getCustomer();

  }

  getCustomer(){
    this.customerService.findByUsername(this.username).subscribe(data =>{
      console.log(data)
      // this.customer = data
      this.getListCar();
    });
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
    console.log(this.customer.id);
    this.contractService.getContractList(this.customer.id).subscribe(data => {
      console.log(data);
      this.carList$ = data;
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
