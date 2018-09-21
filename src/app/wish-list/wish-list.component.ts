import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/hotelapp';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

@Input() wishList : Hotel;

  constructor() { }

  ngOnInit() {
  }

}
