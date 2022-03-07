export class Usuario {
    id?: number;
    nombre: string;
    clave: string;

    constructor(nombre: string, clave: string, id?: number) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
    }
}
  