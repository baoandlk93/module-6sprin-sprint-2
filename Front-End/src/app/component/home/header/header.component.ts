import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token-storage.service";
import {AuthService} from "../../../service/auth.service";
import {CarService} from "../../../service/car.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    responsiveOptions: any;
    username = '';
    currenUrl: string;

    constructor(private router: Router,
                private tokenService: TokenStorageService,
                private authService: AuthService,
                private service: CarService) {
    }

    ngOnInit(): void {
        this.showUsername()

    }
    showUsername() {
        this.service.getUsername().subscribe(value => {
            console.log(value);
            this.username = value.username;
        });
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
        this.router.navigateByUrl('home');
    }
}
