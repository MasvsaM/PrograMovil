import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQRPage implements OnInit {
  showImage: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  EscanearQR() {
     this.showImage = true;

    }
}
