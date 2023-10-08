"use strict";

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

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj, typeof obj);
// Expected output: Object { foo: "bar", baz: 42 }

let newObjet1 = {};
let newObjet2 = new Object();
let newObjet3 = { name: "MyName" };
const persona = { nombre: "Juan", edad: 30 }; //Object literal
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
const juan = new Persona("Juan", 30);

class Personas {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
const pedro = new Personas("Pedro", 30);
console.log(pedro);
