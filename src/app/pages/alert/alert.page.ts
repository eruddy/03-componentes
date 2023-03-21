import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('click en ok');
          },
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('click en cancelar');
          },
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'Por Favor, Ingresa tu Información',
      buttons: [
        {
          text: 'ok',
          handler: (data: any) => {
            console.log('confirm ok');
            console.log(data);
          },
        },
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel',
          handler: (data: any) => {
            console.log('click en cancelar');
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Una descripción corta',
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {}
}
