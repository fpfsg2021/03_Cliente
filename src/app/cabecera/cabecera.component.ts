import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from '../productos-services.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private servicio:ProductosServicesService) { }

  ngOnInit(): void {
  }

  verCamisetas(){
    
  }
  verPantalones(){
    
  }


}
