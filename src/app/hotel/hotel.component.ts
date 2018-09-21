import { Component, OnInit, Input, Output } from '@angular/core';
import { Hotel } from '../hotelapp';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit { //implements ใช้เพื่อดให้ำเนินการต่อไปยัง OnInit
@Input() hotel: Hotel; //Hotel เข้า hotel
@Output() star = new EventEmitter(); //function ใช้เพื่อเป็นตัวกลาง เพื่อให้ส่งค่าข้าม companent ได้ *ต้องใช้@output

  constructor() { }

  ngOnInit() {
  }

  onStarClick(){ //ต้้งfunction click
this.star.emit(); //emit คือ เมื่อต้องการส่งค่าออกไป
  }

}
