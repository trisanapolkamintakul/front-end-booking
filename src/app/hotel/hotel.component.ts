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

// hotels = [
//   {
//     name: "โรงแรม สยาม",
//     description: "เตียง+โซฟา",
//     imageUrl: "https://q-ak.bstatic.com/images/hotel/max1024x768/468/46871800.jpg"
//   },
//   {
//     name: "โรงแรม จีน",
//     description: "เตียง+ตู้เย็น",
//     imageUrl: "https://images.trvl-media.com/hotels/11000000/10950000/10943300/10943203/fbdd1f45_z.jpg"
//   },
//   {
//     name: "โรงแรม ญีปุ่น",
//     description: "เตียง+ทีวี",
//     imageUrl: "http://www.thaihoteljob.com/thaihoteljob/upload/employers/Logo_6883.jpg"
//   }
// ];

  constructor() { }

  ngOnInit() {
  }

  onStarClick(){ //ต้้งfunction click
this.star.emit(); //emit คือ เมื่อต้องการส่งค่าออกไป
  }

}
