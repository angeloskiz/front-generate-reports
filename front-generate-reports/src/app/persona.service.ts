import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas(): any{
    return []
  }
  eliminarPersona(id:String): any{
  return null;
  }

  guardarPersona(persona:Persona): any{
    return null;
    }
    obtenerPersona(id: String): any{
      return null;
    }
  editarPersona(id:String,persona:Persona): any{
    return null;
  }
}
