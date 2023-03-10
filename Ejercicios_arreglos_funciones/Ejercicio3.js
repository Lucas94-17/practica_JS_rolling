// Arrays
//********************************************************** */
//********************************************************** */

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
// año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
// let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
// meses.forEach( elemento => console.log(elemento)); 

//********************************************************** */
//********************************************************** */

// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'.
// let ciudades = [];
// let bandera = true ;
// while(confirm("Ingrese Aceptar , si desesa salir aprieta Cancelar")===true){
//     let algo = prompt("Ingrese la ciudad que desea");
//     ciudades.push(algo);
// };
// console.log(ciudades.length);
// document.write(ciudades[0] , ciudades[2] , ciudades[ciudades.length-1] + "<br>");
// console.log(ciudades.push("París"));
// document.write(ciudades[1]);
// console.log(ciudades);
// ciudades.splice(1,1,"Barcelona");
// console.log(ciudades);

//********************************************************** */
//********************************************************** */

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
// función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
// de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
// anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
// esta operación.
// let dado1 ;
// let dado2 ;
// let resultado = [];
// let suma=0;
// for (let i = 0; i < 50 ; i++) {
//     dado1 = Math.floor(Math.random()*(6-1) + 1); //GENERO LOS NUMEROS ALEATORIOS ENTEROS, CON LA FUNCION RANDOM Y USANDO LA SIGUIENTE FORMULA Math.floor(Math.random()*(max-min) + min) CON LA FUNCION Math.floor que redondea hacia arriba el numero
//     dado2 = Math.floor(Math.random()*(6-1) + 1);
//     suma = dado1+dado2;
//     resultado[i] = suma;
// }

// console.log(resultado);

//********************************************************** */
//********************************************************** */

// Funciones

//********************************************************** */
//********************************************************** */

// 1- Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.
// let numero ;
// numero = prompt("Ingrese un numero ");
// function paroimpar(parametroxd) {
//     if ((parametroxd%2)==0) {
//         document.write("El numero es par");
//     }else{
//         document.write("El numero es impar");
//     }
// }

// paroimpar(numero);

//********************************************************** */
//********************************************************** */

// 2- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.

// let cadena1 = "";
// cadena1 = prompt("Ingrese la ciudad que desea");
// let mostrar = (argumentos1) => {
//     console.log(argumentos1);
//     if(argumentos1 === argumentos1.toLowerCase()) {
//         document.write("La cadena ingresada esta compuesta unicamente por minusculas");
//     }else if(argumentos1 === argumentos1.toUpperCase()){
//         document.write("La cadena ingresada esta compuesta unicamente por mayusculas");
//     }else{
//         let x=0;
//         let y=0;
//         for(let i = 0; i < argumentos1.length; i++) {
//             let charCode = argumentos1[i].charCodeAt();
//             //Si pertenece a las mayusculas
//             if (charCode >= 65 && charCode<= 90) { //Si la variable está entre 65 y 90 , pertenece a un valor de las letras mayusculas en codigo ASCII
//                 x++;  
//             //Si pertenece a las minusculas
//             }else if (charCode >= 97 && charCode<= 122) { //Si la variable está entre 97 y 122 , pertenece a un valor de las letras minusculas en codigo ASCII
//                 y++;  
//             }
//         }
//         if (x != 0 && y!=0) {
//             document("La palabra esta compuesta por mayusculas y minusculas ");
//         }
//     }
// }
// console.log(mostrar(cadena1));

//********************************************************** */
//********************************************************** */

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// ● La fórmula del perímetro es p = 2*(a +b)

// let lado1,lado2;
// lado1 = prompt("Ingrese el primer lado del rectangulo");
// lado2 = prompt("Ingrese el segundo lado del rectangulo");

// function perimetro(lado1,lado2) {
//     let perimetro = 2*(lado1+lado2);
//     return perimetro;
// }
// document.write("el perimetro del rectangulo es : " + perimetro(lado1,lado2));

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.

// let numero ;
// numero = prompt("Ingrese el numero");
// for (let i = 1; i <= 10; i++) {
//     console.log(numero*i);
// }