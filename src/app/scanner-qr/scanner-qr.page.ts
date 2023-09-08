import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})

export class ScannerQRPage implements OnInit {
  showImage: boolean = false;
  showActionSheet: boolean = false;

  constructor(public actionSheetController: ActionSheetController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Desea permitir que se utilice la cámara',
      buttons: [
        {
          text: 'Permitir',
          handler: () => {
            this.EscanearQR();
          },
        },
        {
          text: 'Cancel',
          role: 'destructive',
        },
      ],
    });

    await actionSheet.present();
  }

  EscanearQR() {
     this.showImage = true;
    }
    SalidaAlumno() {
    this.navCtrl.navigateForward('/salida-alumno');
  }
}
