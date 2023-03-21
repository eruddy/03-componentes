import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage {
  public isDisabled: boolean = true;
  personajes: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Mujer Maravilla',
    'Flash',
  ];
  constructor() {}

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
    const itemMover = this.personajes.splice(ev.detail.from, 1)[0];
    this.personajes.splice(ev.detail.to, 0, itemMover);
    console.log(this.personajes);
  }
  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }
}
