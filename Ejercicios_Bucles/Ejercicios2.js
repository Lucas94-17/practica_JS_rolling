// 1 -Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje.

// let edad = Number(prompt("Ingrese el valor de la edad"));
// if (edad >= 0) {
//     if (edad > 18) {
//         document.write("Ya puedes conducir");
//     }else{
//         document.write("Usted es menor de edad")
//     }
// }else{
//     alert("Usted a ingresado un numero no valido");
// }

//********************************************************** */
//********************************************************** */

// 2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
// la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
// de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
// “Introduce un número válido”.

// let bandera = true;
// let nota;
// while (bandera == true) {
//     nota = Number(prompt("Ingrese la nota del alumno del 0 al 10"));
//     if (nota >=0 && nota <=10) {
//         bandera = false;
//         if (nota >=0 && nota <=2) {
//             alert("Su nota es deficiente");
//         }else if(nota >=3 && nota<=4){
//             alert("Su nota es insuficiente");
//         }else if(nota>=5 && nota<=6){
//             alert("Su nota es suficiente");
//         }else if( nota>=7 && nota < 8){
//             alert("Su nota es buena");
//         }else if( nota>=8 && nota <=9 ){
//             alert("Su nota es notable!");
//         }else if(nota== 10){
//             alert("Su nota es sobresaliente");
//         }
//     }else{
//         alert("Introduce un numero valido");
//     }
// };

//********************************************************** */
//********************************************************** */

// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// bandera = true ; 
// // let cadena2 = [];
// let frase1 = "";
// let frase2 = "";
// let frase3 = "";
// let cantidad ;
// // let i = 0;
// while (bandera == true) {


//     if (confirm(" Presione aceptar si desea ingresar una cadena") == true) {
//         frase1=prompt("Ingrese el texto que desea concatenar");
//         frase2=frase2 + frase1 + "-"
        
//     }else{
//         bandera = false;
//         cantidad = (frase2.length-1);
//         frase3 = frase2.substring(0,cantidad);
//     }

// }
// document.write(frase3)


/////////ESTO LO HICE CON UN ARRAY , ME HABIA EQUIVOCADO!!!!!!!!!!////////////
// bandera = true ; 
// // let cadena2 = [];
// let cadena1 = [];
// let i = 0;
// while (bandera == true) {


//     if (confirm(" Presione aceptar si desea ingresar una cadena") == true) {
//         cadena1[i]=prompt("Ingrese el texto que desea concatenar");
//         i++;
//     }else{
//         bandera = false;
        

//     }

// }
// document.write(cadena1.join("-"));
//////////////////////////////////
//********************************************************** */
//********************************************************** */

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducidos.

// bandera = true ;
// let numero;
// let suma = 0 ;
// let i = 0;
// while (bandera == true) {
//     if (confirm("Ingrese numeros , si desea salir ingrese en cancelar") == true) {
//         numero =Number(prompt("Ingrese un numero"));
//         if (Number.isInteger(numero)) {
//             suma = suma + numero;
//             console.log(suma);
//         }else{
//             alert("ingrese nuevamente un numero");
//         }
//     }else{
//         bandera = false ;
//     }
// }
// document.write("La suma de los numeros es :" + suma);

//********************************************************** */
//********************************************************** */

// 5- Realizar una página con un script que calcule el valor de la letra de un número
// de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
// W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a
// preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// let dni;
// let bandera = true;

// while (bandera == true) {
//     let division = 0;
//     if (confirm("Si desea ingresar , presione aceptar , de lo contrario , cancelar") === true){
//        dni = Number(prompt("Ingrese el dni que sea entre 0 y 99999999"));
//        if ((dni>0 && dni<99999999) && Number.isInteger(dni)) {
//         division = (dni%23);
//             switch (division) {
//                 case 0:
//                     console.log("T");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 1:
//                     console.log("R");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 2:
//                     console.log("W");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 3:
//                     console.log("A");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 4:
//                     console.log("G");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 5:
//                     console.log("M");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 6:
//                     console.log("Y");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 7:
//                     console.log("F");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 8:
//                     console.log("P");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 9:
//                     console.log("D");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 10:
//                     console.log("X");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 11:
//                     console.log("B");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 12:
//                     console.log("N");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 13:
//                     console.log("J");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 14:
//                     console.log("Z");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 15:
//                     console.log("S");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 16:
//                     console.log("Q");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 17:
//                     console.log("V");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 18:
//                     console.log("H");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 19:
//                     console.log("L");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 20:
//                     console.log("C");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 21:
//                     console.log("K");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 case 22:
//                     console.log("E");
//                     console.log(dni);
//                     console.log(division);
//                 break;
//                 default:
//                     break;
//             }
//        }else{
//         alert("Ingrese nuevamente el numero");
//        }
//     }else{
//         bandera = false;
//     }
       
// }


//********************************************************** */
//********************************************************** */


// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
asdas
