import { Component } from '@angular/core';

@Component({
  selector: 'estudiantes-comp',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

	public nombre: string;
	public costo: number;
	public duracionEnHoras: number;
   
    constructor(){
        this.nombre = 'Programacion web';
        this.costo = 100000;
        this.duracionEnHoras = 12;
        console.log(this);
    }   
}
