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
  blockSpecial: RegExp = /^[^<>*!]+$/

  blockSpace: RegExp = /[^\s]/;

  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

  cc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
