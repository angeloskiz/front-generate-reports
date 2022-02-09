import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  nombre: String = '';
  apellido: String = '';
  
  constructor () {}

  public obtenerClaveSecreta (nombre: String, apellido: String) {
    this.nombre = nombre
    this.apellido = apellido
    return this.obtenerClaveGeneral();
  }

  public obtenerNombre () {
    return this.nombre;
  }
  
  private obtenerClaveGeneral () {
    let clave1: String = this.obtenerClaveNombre();
    let clave2: String = this.obtenerClaveApellido();
    let clave3: any = this.obtenerClaveNumerica();
    return clave1 = `${clave3}${clave2}`
  }

  private obtenerClaveNombre () {
    return this.nombre.substring(2, 5).toUpperCase();
  }
  
  private obtenerClaveApellido () {
    return this.apellido.substring(0, 3).toUpperCase();
  }
  
  private obtenerClaveNumerica () {
    let numero:number = this.nombre.length + this.apellido.length * 197;
    return numero;
  }
}
