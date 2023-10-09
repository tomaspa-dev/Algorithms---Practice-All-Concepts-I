"use strict";

//*****/1-Arrays/*****/

//0 Construyendo  e inicializando arreglos
// const numeros = [1, 2, 3, 4];
// console.log(numeros);

// const pares = numeros.filter((numero) => numero % 2 !== 0);
// console.log(pares);

// const newNumeros = numeros.map((numero) => Math.pow(numero, 1 / 2));
// console.log(newNumeros);

// const [primero, segundo] = numeros;
// console.log(primero, segundo, typeof primero, typeof numeros);

// const numeros = [1, 2, 3, 4, [5, 6, 7, 8], [9, 10]];
// console.log(numeros);

// const nuevosNumeros = [, , , ...numeros];
// console.log(nuevosNumeros);

// Array(7); // [7]
// console.log(Array(7));
// Array.of(1, 2, 3); // [1, 2, 3]
// console.log(Array.of(1, 2, 3));

// const numeros = [1, 2, 3];
// numeros.forEach((numero) => console.log(numero));

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);

const suma1 = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma1); // 15

//*****/1-Arrays/*****/

//LeetCode//

//LeetCode//

// //1 Excercises

// let a = null;
// a ??= "valor predeterminado";
// console.log(a);

// const a = 1;
// const result = a == true ? true : false;
// console.log(result);

// let myMap = new Map();
// myMap.set("foo", { name: "baz", desc: "inga" });

// let nameBar = myMap.get("faa")?.name;
// console.log(nameBar);

// //1 Excercises
// let a = true;
// let b = 0;
// let c = 23;

// a &&= 10;
// console.log(a);

// //1 Excercises

// //0) Excercises
// const var1 = 10;
// const var2 = 1;
// let result = 10;

// if (var1 > 19) {
//   result &&= var1;
// } else {
//   result ||= var2;
// }

// console.log(result);
// //0) Excercises

//Tipos de Datos / Data Types
//Primitivos y Objeto / Primitives and Objects

// let variable = "Hello World";
// console.log(
//   `1 - Soy la variable - ${variable} , del tipo - ${typeof variable}`
// );
// variable = true;
// console.log(
//   `2 - Soy la variable - ${variable} , del tipo - ${typeof variable}`
// );
// variable = 12563;
// console.log(
//   `2 - Soy la variable - ${variable} , del tipo - ${typeof variable}`
// );
//Primitivos y Objeto / Primitives and Objects

////No primitivos - Objects
// const entries = new Map([
//   ["foo", "bar"],
//   ["baz", 42],
// ]);

// const obj = Object.fromEntries(entries);

// console.log(obj, typeof obj);
// // Expected output: Object { foo: "bar", baz: 42 }

// let newObjet1 = {};
// let newObjet2 = new Object();
// let newObjet3 = { name: "MyName" };
// const persona = { nombre: "Juan", edad: 30 }; //Object literal
// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }
// const juan = new Persona("Juan", 30);

// class Personas {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
// }
// const pedro = new Personas("Pedro", 30);
// console.log(pedro);
////No primitivos - Objects
