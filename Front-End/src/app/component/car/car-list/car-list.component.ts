import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import {BehaviorSubject, Observable} from "rxjs";
import {ConfirmationService, MessageService, PrimeNGConfig, SelectItem} from "primeng/api";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService,ConfirmationService]
})
export class CarListComponent implements OnInit {
  pageNumber = 1;
  pageSize = 5;
  name = '';
  total$: Observable<number>;
  carIdDelete: number;
  carNameDelete: string;
  totalElements: number;
  cars$: Observable<Car[]>;
  sortOptions: SelectItem[];
  sortOrder: number;

  sortField: string;
  sortKey: string;

  productDialog: boolean;

  product: Car;

  selectedProducts: Car[];

  submitted: boolean;

  statuses: any[];
  products: Car[];
  constructor(private service: CarService,
              private primengConfig: PrimeNGConfig,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    console.log('data');
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
      console.log(data);
      this.cars$ = new BehaviorSubject<Car[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
      this.totalElements = data.totalElements;

    },error =>{
      console.log(error)
    });
  }
  openNew() {
    this.product = {description: "", inventoryStatus: ""};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  editProduct(product: Car) {
    this.product = {...product};
    this.productDialog = true;
  }

  deleteProduct(product: Car) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {description: "", inventoryStatus: ""};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {description: "", inventoryStatus: ""};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
