import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value3: string;
  date13: any;
  invalidDates: any;

  constructor() { }

  ngOnInit(): void {
  }

}
