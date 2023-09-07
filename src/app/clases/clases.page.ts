import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  clase1="Clase de programacion PGY3679";
  clase2="Clase de base de datos BSD8921";
  clase3="Clase de Arquitectura ASY7803";
  clase4="Clase de Ingles INI6772";

  clases = new FormGroup({
    clases1: new FormControl(''),
    clases2: new FormControl(''),
    clases3: new FormControl(''),
    clases4: new FormControl('')
  });
  
  goToPagina1() {
    console.log(this.clase1)
    let navigationExtras: NavigationExtras = {
      state: {clases1: this.clase1}
      };
      this.router.navigate(['/generar-qr'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }
  
  
  
  
  constructor(private router: Router) { }


  ngOnInit() {
  }

}
