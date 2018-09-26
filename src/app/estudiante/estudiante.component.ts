import { Component } from '@angular/core';

@Component({
  selector: 'estudiantes-comp',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
	public titulo: string = 'Este es el titulo';
  	public listado: string = 'Este el el parrafajito';
   
}
