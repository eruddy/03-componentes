import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  public porcentaje = 0.5;
  pinFormatter = (value: number) => {
    console.log(value / 100);
    this.porcentaje = value / 100;
    return `${value}%`;
  };
  constructor() {}

  ngOnInit() {}
}
