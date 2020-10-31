import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-servicio-tecnico',
  templateUrl: './servicio-tecnico.component.html',
  styleUrls: ['./servicio-tecnico.component.scss']
})
export class ServicioTecnicoComponent implements OnInit {

  tecnicoId: number;
  servicioId: number;
  fechas: string;
  horaInicio: Date;
  horaFin: Date;
  servicioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
