export class Estudiante{
    
	public nombre: string;
	public apellido: string;
    public intercambio: boolean;

    constructor(nombre, apellido, intercambio){
        this.nombre = nombre;        
        this.apellido = apellido;
        this.intercambio = intercambio;
    }
}