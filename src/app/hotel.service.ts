import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
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
  constructor() { }
}
