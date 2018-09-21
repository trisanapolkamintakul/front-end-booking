import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map , filter } from 'rxjs/operators';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotelapp';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
 
  hotel : Hotel;

  constructor(private activatedRoute: ActivatedRoute,
    private hotelService: HotelService) {
    
    activatedRoute.paramMap.pipe(
      filter( param => param.has("name")),
      map( param => param.get("name") )
    ).subscribe({
      next: (name) => {this.hotel = this.getHotel(name)}
    });
  

    // activatedRoute.paramMap.subscribe({
    //   next: (data) => { console.dir(data) },
    //   error: () => { },
    //   complete: () => { }
    // });
  }
  getHotel(name: string){
    return this.hotelService.hotels.find(
      (hotel) => {
        return hotel.name == name
      }
    )
  }

  ngOnInit() {
  }

}
