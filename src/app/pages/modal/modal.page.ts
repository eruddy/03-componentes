import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  message =
    'This modal example uses the modalController to present and dismiss modals.';
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      //se envian estos parametros al modal hijo
      componentProps: {
        nombre: 'Elvio Ruddy',
        apellido: 'Mixto',
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data.nombre}! - ${data.pais}`;
      console.log(data);
    }
  }
}
