# Encriptarangular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Paqueteria instalada
Las dependencias instaladas en este proyecto :

-`npm install crypto-js –save`

-`npm install bootstrap –save`

## Servidor de desarrollo

Para correr el proyecto en terminal `ng serve` bastara con ir al directorio `http://localhost:4200/`. O utilizar `ng server -o`


## Build

Ejecute 'ng build' para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio 'dist/'. Utilice el indicador '--prod' para una compilación de producción.

## Parte Backend
Modulos agregados en en el archivo angular.json

  `"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/crypto-js/crypto-js.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]`
Con esto tenemos el proyecto configurado para usar las modulos instaldos anteriormente.

En el app.module.ts para poder usar formularios en nuestra app.

Hacemos un import de :

 `import {FormsModule, ReactiveFormsModule} from ‘@angular/forms’; `

y tambien lo agregamos en el imports de @NgModule:

 `imports: [

    BrowserModule, FormsModule, ReactiveFormsModule

  ], `
con esto ya tendra las vistas de nuestro componente.

## Parte Frontend
La primera parte es la de cifrado que contendra las siguientes partes:

-Una caja para el texto que vamos a cifrar

-Una caja para meter la clave

-Un textarea para mostrar el texto ya cifrado

-Un boton para llamar a la funcion de convertirTexto pasandole un valor «encriptar»

La segunda parte es la de descifrado y contendra las siguientes partes:

-Una caja para meter el texto que queremos descifrar

-Una caja para meter la clave usada en el cifrado y que usaremos en esta caja para descifrar el mensaje.

-Un textare que nos mostrara el mensaje descifrado

-Un boton para llamar a la funcion convertirTexto pasandole un valor «desencriptar»

En esta etiqueta definimos la clase que es de tipo formulario y ngModel que capturara el contenido que hay en la caja , en este caso seria el texto que vamos a introducir para cifrar

 `<input type=»text» class=»form-control» placeholder=»Ingresa texto a encriptar» [(ngModel)]=»enctexto»> `

Esta es la misma que la anterior descrita y servira para capturar la clave que usaremos para cifrar el texto

 `<input type=»password» class=»form-control» placeholder=»Ingresa llave de encripción» [(ngModel)]=»encPass»> `

Aqui usaremos un textarea para mostrar el texto cifrado, con {{textoEncriptado}} pintamos el resultado de cifrar el texto

      <textarea class=»form-control» readonly rows=»3″>{{textoEncriptado}}</textarea>

Por ultimo tenemos el boton que contiene el evento (click)=»convertirTexto(‘encriptar’) , esto lo qque hace es llamar a la funcion «convertirTexto» pasandole un parametro (‘encriptar’)

      <button type=»button» class=»btn btn-success float-right» (click)=»convertirTexto(‘encriptar’)»>Encriptar</button>

Parte Desencriptar :

En esta etiqueta vamos a introducir el resultado de encriptar el texto y lo capturamos con ngModel

   `<input type=»text» class=»form-control» placeholder=»Ingrese el texto que quieres desencriptar» [(ngModel)]=»destexto»> `

En esta etiqueta vamos a introducir la clave que hemos usado para cifrar y que ahora usaremos para descifrar el texto cifrado, capturamos la clave con ngModel

 `<input type=»password» class=»form-control» placeholder=»Ingrese la llave para desencriptar» [(ngModel)]=»desPass»> `

En esta etiqueta se mostrare el texto ya descifrado y lo pintaremos con {{textoDesencriptado}}

      <textarea class=»form-control» readonly rows=»3″>{{textoDesencriptado}}</textarea>

Por ultimo tenemos el boton que contiene el evento (click)=»convertirTexto(‘desencriptar’) , esto lo que hace es llamar a la funcion «convertirTexto» pasandole un parametro que en este caso sera el de (‘desencriptar’)

      <button type=»button» class=»btn btn-success float-right» (click)=»convertirTexto(‘desencriptar’)»>Desencriptar</button>
      
## Captura final del funcionamiento encriptacion de mensaje
Generado apartir de un mensaje y una clave la misma que se usa para desencriptar.

![Captura de pantalla (1468)](https://user-images.githubusercontent.com/92960409/152889349-eea41d43-61cc-4ba3-b7e2-7b17b6a11c94.png)
