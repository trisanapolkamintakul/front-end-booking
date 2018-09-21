import { Component } from '@angular/core';
import { Hotel } from 'src/app/hotelapp';

@Component({
  selector: 'app-root',//ต้องมี*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking'; //popperty title

  hotels = [
    {
      name: "โรงแรม สยาม",
      description: "เตียง+โซฟา",
      imageUrl: "https://q-ak.bstatic.com/images/hotel/max1024x768/468/46871800.jpg"
    },
    {
      name: "โรงแรม จีน",
      description: "เตียง+ตู้เย็น",
      imageUrl: "https://images.trvl-media.com/hotels/11000000/10950000/10943300/10943203/fbdd1f45_z.jpg"
    },
    {
      name: "โรงแรม ญีปุ่น",
      description: "เตียง+ทีวี",
      imageUrl: "http://www.thaihoteljob.com/thaihoteljob/upload/employers/Logo_6883.jpg"
    }
  ];
  wishList: Hotel[] = []; //รับ Hotel เป็น alay เก็บใน wishList
  //wishList: Set<Hotel> = new Set();  ใช้ไม่ซ้ำ
  addWishList(hotel: Hotel){ //เพิ่มจาก Hotel ใน hotel
    this.wishList.push(hotel); //คำสั่งเพิ่ม hotelลง wishList เพื่อดึงเอา wishList ไปใช้
    console.dir(this.wishList); //ใช้เพื่อโชว์ ใน consle เพื่อให้รู้ว่า ค่ามาแล้ว
   // this.wishList.add(hotel);
  }
}
