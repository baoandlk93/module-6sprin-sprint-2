import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    products: [
                {
                    id: 3,
                    name: 'K3',
                    year: 2020,
                    brand: 'Kia',
                    color: 'red',
                    price: 1000000000,
                    design: 'Sedan',
                    numberOfSeat: 5,
                    picture: 'https://danchoioto.vn/wp-content/uploads/2022/04/kia-k3.jpg'
                }
        ];
    responsiveOptions: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
