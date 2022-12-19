import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token-storage.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    responsiveOptions: any;
    username: string = '';
    roles: string[] = [];
    isCustomer = false;
    isAdmin = false;
    isEmployee = false;
    currenUrl: string;

    constructor(private router: Router,
                private tokenService: TokenStorageService) {
    }

    ngOnInit(): void {
        this.showUsername();

    }

    showUsername() {
        if (this.tokenService.isLogged()) {
            this.username = this.tokenService.getUser().username;
            this.roles = this.tokenService.getUser().roles;
            this.isCustomer = this.roles.indexOf('ROLE_CUSTOMER') !== -1;
            this.isEmployee = this.roles.indexOf('ROLE_EMPLOYEE') !== -1;
            this.isAdmin = this.roles.indexOf('ROLE_ADMIN') !== -1;
        }
    }

    loadPage(): void {
        window.location.replace('');
    }

    whenLogout() {
        this.tokenService.logOut();
        this.username = '';
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: ' Đăng xuất thành công !',
            showConfirmButton: false,
            timer: 1000
        });
        window.setTimeout(this.loadPage, 500);
    }
}
