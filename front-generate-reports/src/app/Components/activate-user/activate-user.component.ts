import { Component, OnInit } from '@angular/core';
import { EncryptionService } from 'src/app/encryption.service';
import { ServicesClienteService } from './services-cliente.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})

export class ActivateUserComponent implements OnInit {
  title = 'Login';
  secretKey:string = '';
  public ICliente!: Welcome;
  public IEmpleaod!: NumeroEmpleado;

  constructor(
    public api: ServicesClienteService,
    public service: EncryptionService
  ) {

  }

  ngOnInit(): void {
    this.secretKey = this.service.obtenerClaveSecreta('Sandra', 'Francisco')
    // Encriptar
    let encrypted = CryptoJS.AES.encrypt("HolaMund0!", this.secretKey);
    console.log('encrypted: ', encrypted)

    // Desencriptar
    var decrypted = CryptoJS.AES.decrypt(encrypted, this.secretKey);
    console.log('decrypted: ', decrypted)
  }



  public  ValidarCampos():void{
    const correo = (document.getElementById("txtCorroe") as HTMLInputElement).value;
    localStorage.removeItem('datos');
    this.api.ObtenerCliente(correo).subscribe((res:Welcome)=>{
      console.log(res.datos[0].email);
        if(res.datos[0].email === undefined){
          alert("Usuario No Existe");
        }
        this.ICliente=res;
        localStorage.setItem('datos',JSON.stringify(this.ICliente));
    });
  }
  public EnviarCorreo():void{
   // this.ICliente=JSON.parse(localStorage.getItem('datos') || '');
    const nempelado = (document.getElementById("txtCorroe") as HTMLInputElement).value;
    this.IEmpleaod={
      NEmpleado:nempelado
    }
    this.api.ActualizarEmpleado(this.IEmpleaod).subscribe();
    alert('Actualizado Correctamente');
  }

}
export interface Dato {
  email: string;
  nombre: string;
  puesto: string;
  correoInstitucional: string;
  autorizacion: boolean;
  token: string;
}

interface  NumeroEmpleado{
  NEmpleado: string;
}

interface Welcome {
  ok:    boolean;
  datos: Dato[];
}
