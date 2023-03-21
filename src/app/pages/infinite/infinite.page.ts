import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;

  constructor() {}

  // items: any[] = [];

  ngOnInit() {
    // this.generateItems();
  }

  // private generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 50; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }

  // onIonInfinite(ev: any) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 1500);
  // }

  loadData(event: any) {
    if (this.data.length > 50) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
    }
    // console.log(event);
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      // event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }
}
