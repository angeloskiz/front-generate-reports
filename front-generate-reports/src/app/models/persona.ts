export class Persona{
  _id?:number;
  nombre:string;
  apellido_pat: string;
  apellido_mat: string;
  edad: number;
  sexo: string;


  constructor(nombre:string,apellido_pat: string,
    apellido_mat:string,edad:number,sexo:string) {
    this.nombre = nombre;
    this.apellido_pat = apellido_pat;
    this.apellido_mat = apellido_mat;
    this.edad = edad;
    this.sexo = sexo;
 
    

  }
}

