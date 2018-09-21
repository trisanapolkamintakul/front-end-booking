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
      name: "โรงแรม",
      description: "เตียง",
      imageUrl: "https://q-ak.bstatic.com/images/hotel/max1024x768/468/46871800.jpg"
    },
    {
      name: "โรงแรม",
      description: "เตียง",
      imageUrl: "https://q-ak.bstatic.com/images/hotel/max1024x768/468/46871800.jpg"
    },
    {
      name: "โรงแรม",
      description: "เตียง",
      imageUrl: "https://q-ak.bstatic.com/images/hotel/max1024x768/468/46871800.jpg"
    }
  ];
  wishList: Hotel[] = [];
  //wishList: Set<Hotel> = new Set();  ใช้ไม่ซ้ำ
  addWishList(hotel: Hotel){
    this.wishList.push(hotel);
    console.dir(this.wishList);
   // this.wishList.add(hotel);
  }
}
