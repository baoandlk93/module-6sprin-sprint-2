import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  countries?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
