export class Docente{
    
	public nombre: string;
	public apellido: string;
    public honorarios: number;
    public vinculado: boolean;

    constructor(nombre: string, apellido: string, honorarios: number, vinculado:boolean){
        this.nombre = nombre;        
        this.apellido = apellido;
        this.honorarios = honorarios;
        this.vinculado = vinculado;
    }
}