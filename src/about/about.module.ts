import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ //forChild ใช้เรียก path ทุกอย่างที่เหลือจาก module หลัก
      { path: "", component: AboutComponent }
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
