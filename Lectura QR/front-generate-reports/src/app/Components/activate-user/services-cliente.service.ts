import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesClienteService {

  public Url:string ="http://localhost:5000/auth";

  constructor(public http: HttpClient) {

  }

  public ObtenerCliente(correo:string):Observable<Welcome>{
    return  this.http.get<Welcome>(`${this.Url}/${correo}`,{
      responseType:'json'
    });
  }

  public  EnviarCorreo(correo:string,institucional:string,numempleado:string):Observable<any>{
    return  this.http.get<any>(`${this.Url}/email/${correo}/${institucional}/${numempleado}`,{
      responseType:'json'
    });
  }

  public  ActualizarEmpleado(data:NumeroEmpleado):Observable<any>{
    return  this.http.put<any>(`${this.Url}`,data);
  }
}

interface Welcome {
  ok:    boolean;
  datos: Dato[];
}
interface Dato {
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