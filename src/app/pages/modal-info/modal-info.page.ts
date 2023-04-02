import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {
  //recibe parametros del padre
  @Input() nombre!: string;
  @Input() apellido!: string;

  name!: string;
  pais!: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  //se pasan parametros a el modal padre
  confirm() {
    return this.modalCtrl.dismiss(
      { nombre: this.name, pais: this.pais },
      'confirm'
    );
  }
}
