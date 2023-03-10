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
// let i ;
// let numero;
// let repeticion;
// numero = Number(prompt("Ingrese un numero para iterar"));
// if (numero>=0 && numero<=50) {
//     for (i = numero; i>0 ; i--) {

//         for (repeticion = 0; repeticion < i ; repeticion++) {
//             document.write(i);    
            
//         }
//         document.write("<br>");
//     } 
// }

//********************************************************** */
//********************************************************** */

// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)
// 1 
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let i ;
// let numero;
// let j;
// numero = Number(prompt("Ingrese un numero para iterar"));
// if (numero>= 0 && numero<=50) {
//     if (numero>=0 && numero<=50) {
//         for (i = 1; i<=numero ; i++) {
//             // document.write(i);
//             for (j = 1; j <= i ; j++) {
//                 document.write(j);    
                
//             }
//             document.write("<br>");
//         } 
//     }
// }

//********************************************************** */
//********************************************************** */

// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
// ejemplo :
// 1
// 23
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 67
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

// for (let i = 1; i <= 500; i++) {
//     if ((i%5)==0) {
//         document.write(i + "------------");
//         if ((i%4)==0) {
//             document.write("<br>")
//             document.write("Multiplo de 4"); //Veo si es multiplo tambien de 4 y de 9
//         }else if((i%4)==0){
//             document.write("<br>")
//             document.write("Multiplo de 9");
//         }
//     }else if((i%4)==0){
//         document.write(i + "Multiplo de 4");
//         if((i%9)==0){
//             document.write("<br>")              //Veo si es multiplo de 9 tambien 
//             document.write("Multiplo de 9");
//         }
//     }else if((i%9)==0){
//         document.write(i + "Multiplo de 9");
//         if((i%4)==0){
//             document.write("<br>")              //Veo si es multiplo de 4 tambien
//             document.write("Multiplo de 4");
//         }
//     }
//     document.write("<br>")
// }

//********************************************************** */
//********************************************************** */

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en
// orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.



// let filas = Number(prompt("Ingrese el numero de filas"));
// let columnas = Number(prompt("Ingrese el numero de columnas"));
// let resultado = filas * columnas;
// for (let i = 0; i < filas; i++) {
//     document.write("<br>")
//     document.write("\n");
//     for(let j = 0 ; j < columnas; j++){
        
//     document.write (resultado + "\n");
//         resultado--;
//     }   
// }

//********************************************************** */
//********************************************************** */

// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
// nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// let nombre1 = prompt("Hola , ingrese su nombre por favor");
// let numero1 = Number(prompt(`hola ${nombre1} ingrese su numero por favor`));
// let nombre2 = prompt("Hola , ingrese su nombre por favor");
// let numero2 = Number(prompt(`hola ${nombre2} ingrese su numero por favor`));
// let nombre3 = prompt("Hola , ingrese su nombre por favor");
// let numero3 = Number(prompt(`hola ${nombre3} ingrese su numero por favor`));

// let resultado = Math.max(numero1,numero2,numero3);
// switch (true) {
//     case resultado == numero1:
//         document.write("El mayor numero es de :",nombre1); 
//     break;
//     case resultado == numero2:
//         document.write("El mayor numero es de :",nombre2); 
//     break;
//     case resultado == numero3:
//         document.write("El mayor numero es de :",nombre3); 
//     break;
//     default:
//     break;
// }

//********************************************************** */
//********************************************************** */

// 12- Realiza un script que genere un número aleatorio entre 1 y 99
// let numero = Math.round(Math.random()*(99-1)+1);
// document.write(numero);

//********************************************************** */
//********************************************************** */

// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
// let texto = prompt("Ingrese un texto");
// document.write(texto.toUpperCase());

//********************************************************** */
//********************************************************** */

// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
// – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
// tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let cadena = prompt("Ingrese una cadena de texto");
// for (let i = 0; i < cadena.length; i++) {
//     document.write(cadena[i]+"-");
// }

//********************************************************** */
//********************************************************** */

// 15- Realiza un script que cuente el número de vocales que tiene un texto.
// let frase = prompt("Ingrese una cadena de texto");
// let cont = 0;
// for (let i = 0; i < frase.length; i++) {
//     if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
//         cont++;
//     }
// }
// document.write("El numero de vocales es : " + cont);

//********************************************************** */
//********************************************************** */

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
// si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let cadena = prompt("Ingrese una cadena de texto");
// for (let i = cadena.length ; i >= 0 ; i--) {
//     document.write(cadena[i]);
// }

//********************************************************** */
//********************************************************** */

// 17- Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.

// let cadena = prompt("Ingrese la cadena de caracteres");
// for (let i = 1; i <= cadena.length; i++) {
//     if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
//         document.write("La posicion de la primera vocal es  ;" + (i+1));
//         break;
//     }    
// }