import { Component, OnInit } from '@angular/core';
import {Persona} from "../../models/persona";
import { PersonaService } from 'src/app/persona.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list-crud',
  templateUrl: './user-list-crud.component.html',
  styleUrls: ['./user-list-crud.component.scss']
})
export class UserListCrudComponent implements OnInit {
  // personaForm: FormGroup = null;
  display: String = "none"
  listPersonas: Persona[] = [];

  constructor (
    private _personasService: PersonaService
  ) {}

  ngOnInit(): void {
  }

  agregarPersona () {
    /* const PERSONA: Persona={
      nombre:this.personaForm.get('nombre')?.value,
      apellido_pat:this.personaForm.get('apellido_pat')?.value,
      apellido_mat:this.personaForm.get('apellido_mat')?.value,
      edad:this.personaForm.get('edad')?.value,
      sexo:this.personaForm.get('sexo')?.value,
    } */
    this.openModal('none')
  }

  async openModal(displayButton: String) {
    this.display = displayButton
  }

  obtenerPersonas(){
    /* this._personasService.getPersonas().subscribe((data: Persona[]) =>{
      console.log(data);
    }, (error: any) => {
      console.log(error);
    }) */
    this.listPersonas = [{
      _id: 1,
      nombre: 'Sandy',
      apellido_pat: 'Francisco',
      apellido_mat: 'Cortes',
      edad: 24,
      sexo: 'Mujer'
    }];
  }

    eliminarPersona(id:any){
      this._personasService.eliminarPersona(id).subscribe(() =>{
        // this.toastr.error('La persona fue eliminado con exito','Persona Eliminado');
        this.obtenerPersonas();
      },(error: any)=>{
        console.log(error);
    })
  }
}
