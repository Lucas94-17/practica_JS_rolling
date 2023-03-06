//===========================Punto 1========================= 
//alert("Un mensaje");
//===========================Punto 2=========================
// document.write("hola mundo ");
//===========================Punto 3=========================
// document.write(3+5);
//===========================Punto 4=========================
// let nombre = prompt("Escriba el nombre de usuario");
// document.write(nombre);
//===========================Punto 5=========================
// let numero1= parseInt(prompt("Ingrese un numero"));
// let numero2= parseInt(prompt("Ingrese un numero"));
// document.write(numero1+numero2);
//=========================Punto 6=====================
// let numero1= parseInt(prompt("Ingrese un numero"));//acá tengo que usar la funcion parseInt para convetir el string en un entero
// let numero2=parseInt(prompt("Ingrese otro numero"));
// if(numero1>numero2){
//     document.write("El primer numero es mayor que el segundo");
// }else if(numero1<numero2){
//     document.write("El segundo numero es mayor que el primero");
// }else{
//     document.write("Los numeros son iguales");
// }
//===========================Punto 7======================
// let numero1= parseInt(prompt("Ingrese un numero"));//acá tengo que usar la funcion parseInt para convetir el string en un entero
// let numero2=parseInt(prompt("Ingrese otro numero"));
// let numero3=parseInt(prompt("Ingrese el tercer numero"));
// if(numero1>numero2 && numero1>numero3){
//     document.write("El primer numero es el mayor");
// }else if(numero2>numero1 && numero2>numero3){
//     document.write("El segundo numero es el mayor");
// }else if(numero3>numero1 && numero3>numero2){
//     document.write("El tercer numero es el mayor");
// }
// else{
//     document.write("Los numeros son iguales");
// }
//======================Punto 8=======================
// let numero = Number(prompt("Ingrese el numero"));//MEJOR USAR NUMBER EN VEZ DE PARSEINT
// if((numero%2)==0){
//     document.write("El numero es divisible en 2");
// }else{
//     document.write("El numero no es divisible en 2");
// }
//=======================Punto 9========================
// let frase = prompt("Ingrese una frase");
// let vocales;
// for(let i=0 ; i<frase.length;i++){
//     if (frase[i] == 'a' || frase[i] == 'e'|| frase[i] == 'i'|| frase[i] == 'o'|| frase[i] == 'u') {
//         vocales= frase[i];
//         document.write(vocales);
//     }
// }
//======================Punto 10=======================
// let numero = Number(prompt("Ingrese un numero"));
// if ((numero %2)===0) {
//     document.write("El numero es divisible en 2");
// }else if((numero%3)===0){
//     document.write("El numero es divisible en 3");
// }else if((numero%5)===0){
//      document.write("El numero es divisible en 5");
// }else if((numero%7)===0){
//      document.write("El numero es divisible en 7");
// }
//=======================Punto 11=====================
let numero = Number(prompt("Ingrese un numero"));
if ((numero %2)===0) {
    document.write("El numero es divisible en 2");
}
if((numero%3)===0){
    document.write("El numero es divisible en 3");
} 
if((numero%5)===0){
     document.write("El numero es divisible en 5");
}
if((numero%7)===0){
     document.write("El numero es divisible en 7");
}


