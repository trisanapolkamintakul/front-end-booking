import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

import { AppComponent } from './app.component';

import { HotelComponent } from './hotel/hotel.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeBookingComponent } from './home-booking/home-booking.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ColorDirective } from './color.directive';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({ //ขยาย ตัวข้างใน
  declarations: [ //มีcompronent ไรบ้าง
    AppComponent,
    HotelComponent,
    WishListComponent,
    HomeBookingComponent,
    HotelDetailComponent,
    ColorDirective,
    BookingDetailComponent
  ],
  imports: [
    BrowserModule, //บราเซอร์ต้องเป็นตัวแรกเสมอ
    NgbModule,
    RouterModule.forRoot([ //forRoot จะใช้โชว์หน้า module หลักแค่ครั้งเดียว
      { path: "", redirectTo: "home", pathMatch: "full" }, //router-outlet set show on frist pang ให้แสดงเหมือนกับหน้า home
      { path: "home", component: HomeBookingComponent },  //จาก class HomeBookingComponent ให้เป็นหน้า home
      { path: "wishlist", component: WishListComponent },
      { path: "booking", component: BookingDetailComponent },
      { path: "hoteldetail/:name", component: HotelDetailComponent }, //ใน part ตามด้วย /:...อะไรก็ตามจะเอาค่าใส่ logให้หน่อย
      { path: "about", loadChildren: "src/about/about.module#AboutModule" }, // จาก class WishListComponent ให้เป็น หน้า wishlist
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
