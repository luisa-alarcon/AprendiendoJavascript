/* como llamar las funciones, metodos, constantes etc... */
import saludar, {PI,Saludar} from "./constantes.js";
import {sumar,restar} from "./aritmetica.js";

/* se pueden poner alias con AS */
import {aritmetica as calculos, aritmetica2} from "./aritmetica.js";



console.log("Archivo modulos.js");

console.log(PI);
console.log(sumar(3,4));
console.log(restar(5,4));
console.log(calculos.sumar(3,5));
console.log(aritmetica2.restar(8,5));
saludar();
let saludo = new Saludar();
saludo;