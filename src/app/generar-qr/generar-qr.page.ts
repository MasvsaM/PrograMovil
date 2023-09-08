import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {
  showImage: boolean = false;
  showList: boolean = false;
  items: string[] = [];


  constructor() { }

  ngOnInit() {
  }

  GenerarQR() {
     this.showImage = true;
     this.items = ['Alumnos Presentes: ', 'Michelle Serre', 'Tito Quintero', 'Pedro Loaiza', 'Max Ramirez'];
     this.showList = true;
    }
}
