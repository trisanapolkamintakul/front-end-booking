import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

nameControl = new FormControl('John', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
