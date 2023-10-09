"use strict";

//*****/2-HashTable/*****/

//Example1-TwoSum //2-HashTable//
// Entrada

const nums0 = [];
const target0 = 9;

const nums1 = [-1, 10];
const target1 = 9;

const nums2 = [2, 7, 11, 15];
const target2 = 9;

const nums3 = [11, 15, 7, 2];
const target3 = 9;

const hashMap = function (array, target) {
  // console.log(array, target1);
  if (array && array.length > 1) {
    const hashMap = new Map();

    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      if (hashMap.has(complement)) {
        return [hashMap.get(complement), i];
      }
      hashMap.set(array[i], i);
    }
    // console.log(hashMap);
  }
  return undefined;
};

const findIndex = hashMap(nums3, target3);
console.log(findIndex);

// Salida
// El valor 2 en el índice 0 y el valor 7 en el índice 1 suman 9.
//Example1 //2-HashTable//

// const hashTable = {};
// hashTable["clave1"] = "valor1";
// hashTable[2] = 4;
// console.log(hashTable);

// const hashMap = new Map();
// hashMap.set("clave1", "valor1");
// hashMap.set(42, "valor2");
// console.log(hashMap);

//*****/2-HashTable/*****/

//*****/1-Arrays/*****/

// const array1 = [5, 12, 8, 130, 44];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// const reversed = array1.reverse();
// console.log(reversed);
// console.log(array1.sort());
// console.log(typeof array1.join("-"));

// Expected output: Array [1, 2, 0, 0]

// const array1 = [1, 0, 9];

// console.log(array1.includes(9));
// Expected output: true

// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// const sliceNumeros = numeros.slice(0, 3);
// console.log(sliceNumeros);

// let frutas = ["Manzana", "Banana"];

// let newLength = frutas.push("Naranja");
// console.log(newLength);
// let ultimo = frutas.pop();
// let primero = frutas.shift();
// console.log(ultimo);
// console.log(primero);
// const newLength2 = frutas.unshift("Uvas", "Sandia");
// console.log(frutas);
// console.log(newLength2);

// // frutas.splice(1, 1, "Fresa", "Durazno");
// frutas.splice(1, 1);
// console.log(frutas);

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

// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce(function (acumulador, numero) {
//   return acumulador + numero;
// }, 0);

// const suma1 = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(suma1); // 15

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
