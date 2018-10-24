import { Component, OnInit } from '@angular/core';
import { Docente } from './docente.curso';
import { Estudiante } from './estudiante.curso';
@Component({
  selector: 'curso-comp',
  templateUrl: './curso.component.html'
})
export class CursoComponent implements OnInit{

	public nombre: string;
	public apellido: string;
    public duracionEnHoras: number;
    public docente: Docente;
    public estudiante: Estudiante;

    public estudiantes: Array<Estudiante> = new Array();
   
    constructor(){
        this.duracionEnHoras = 12;
    }

    public ngOnInit(){
        this.docente = new Docente('Andres', 'Calle',7000000, true);
        this.cargarEstudiantes();
        console.log(this);
    }

    public cargarEstudiantes(){
        this.estudiantes.push(new Estudiante('Care', 'culo',true));
        this.estudiantes.push(new Estudiante('Jose', 'culo',true));
        this.estudiantes.push(new Estudiante('Cristian', 'culo',true));
    }

    public matricularEstudiante(){
        this.estudiantes.push(new Estudiante(this.nombre, this.apellido,false));
        this.nombre = '';
        this.apellido = '';
    }
}
