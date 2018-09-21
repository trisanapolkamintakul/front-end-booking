import { Component, OnInit, Input, Output } from '@angular/core';
import { Hotel } from '../hotelapp';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
@Input() hotel: Hotel;
@Output() star = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStarClick(){
this.star.emit();
  }

}
