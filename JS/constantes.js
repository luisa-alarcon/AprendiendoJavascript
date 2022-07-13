/* para exportar constantes, metodos, funciones etc... se usa la palabra EXPORT*/
export const PI = Math.PI;


let usuario ="jhon";


/* exportar por defecto 
es cuando se manda a llamar en formato de modulo el archivo es la funcion que por default se va a ejecutar 

No se pueden exportar por default 2 veces*/

export default function saludar(){
    console.log("Hola modulos +ES6")
}

/*con let, const se exporta por default de la siguiente manera*/

let password = "12345";

export default password;


export class Saludar{
    constructor(){
        console.log("Hola Clases ES6")
    }
}
