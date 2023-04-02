import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  textoBuscar: string = '';
  superHeroes!: Observable<any>;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }
  // segmentChanged(ev: any) {
  //   console.log(ev.detail.value);
  //   if (ev.detail.value == 'todos') {
  //     this.textoBuscar = '';
  //   } else {
  //     this.textoBuscar = ev.detail.value;
  //   }
  // }
  //Utilizando operador ternario
  segmentChanged(ev: any) {
    // console.log(ev.detail.value);
    this.textoBuscar = ev.detail.value == 'todos' ? '' : ev.detail.value;
  }
}
