import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/wish-list.service';
import { Hotel } from '../hotelapp';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-home-booking',
  templateUrl: './home-booking.component.html',
  styleUrls: ['./home-booking.component.css']
})
export class HomeBookingComponent implements OnInit {



  constructor(private wishListService: WishListService,
    private hotelService: HotelService) { }
  addWishList(hotel: Hotel) {
    this.wishListService.wishList.add(hotel);
    console.dir(this.wishListService.wishList); //console.dir ใช้คล้าย .log แต่จะอ่านได้ง่ายกว่า
  }
  ngOnInit() {
  }

}
