import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {}
  mostrarLoading() {
    this.showLoading('Mensaje para mostrar');
  }
  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 3000,
    });

    loading.present();
  }
}
