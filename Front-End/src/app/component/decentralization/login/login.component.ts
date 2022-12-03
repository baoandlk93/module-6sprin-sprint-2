import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  value4: string;
  value1: string;
  value2: string;
  value3: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    register() {
        this.router.navigateByUrl('decentralization/register');
    }
}
