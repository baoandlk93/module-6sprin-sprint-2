import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../service/car.service";
import {Car} from "../../../model/i-car";
import {BehaviorSubject, Observable} from "rxjs";
import {ConfirmationService, MessageService, PrimeNGConfig, SelectItem} from "primeng/api";
import {IGear} from "../../../model/i-gear";
import {IBrand} from "../../../model/i-brand";

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
    providers: [MessageService, ConfirmationService]
})
export class CarListComponent implements OnInit {
    page = 0;
    pageSize = 10;
    name = '';
    total$: Observable<number>;
    totalElements: number;
    cars$: Observable<Car[]>;
    sortOptions: SelectItem[];
    sortOrder: number;
    sortField: string;
    sortKey: string;

    productDialog: boolean;

    car: Car;
    brands: IBrand[];
    gear: IGear[];

    selectedProducts: Car[];

    submitted: boolean;

    statuses: any[] = [true,false];
    cars: Car[];

    constructor(private service: CarService,
                private primengConfig: PrimeNGConfig,
                private messageService: MessageService,
                private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
        // console.log('data');
        this.paginate();
        this.getGearList();
        this.getBrandList();
        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];
    }
    getGearList(){
        this.service.getGearList().subscribe( data =>{
            console.log(data);
            // @ts-ignore
            this.gear = data;
        })
    }
    getBrandList(){
        this.service.getBrandList().subscribe(data =>{
            // @ts-ignore
            this.brands = data;
        })
    }

    onPageChange(event) {
        this.page = event.first;
        this.paginate();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    paginate() {
        this.service.paginate(this.page, this.pageSize, this.name).subscribe(data => {
            // console.log(data);
            this.cars$ = new BehaviorSubject<Car[]>(data.content);
            this.total$ = new BehaviorSubject(data.totalPages);

        }, error => {
            console.log(error)
        });
    }

    openNew() {
        this.car = {status: "", description: "", brandName: ""};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.cars = this.cars.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Products Deleted',
                    life: 3000
                });
            }
        });
    }

    editProduct(product: Car) {
        this.car = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Car) {
        this.confirmationService.confirm({
            message: 'Bạn chắc chắn muốn xoá ' + product.name + '?',
            header: ' Cảnh báo!!!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteCar(parseInt(product.id)).subscribe(() => {
                    // console.log(product.id)
                    this.paginate();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Xoá thành công',
                        detail: 'Xe đã bị xoá',
                        life: 3000
                    });

                });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.car.name.trim()) {
            if (this.car.id) {
                this.cars[this.findIndexById(this.car.id)] = this.car;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000
                });
            } else {
                this.car.id = this.createId();
                this.car.picture = 'product-placeholder.svg';
                this.cars.push(this.car);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000
                });
            }

            this.cars = [...this.cars];
            this.productDialog = false;
            this.car = {description: "", status: ""};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

}
