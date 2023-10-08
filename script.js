"use strict";

//LeetCode//
/**
 * @param {number[]} nums
 * @return {number}
 */

//Input: nums = [4,1,2,1,2]
//Output: 4

var singleNumber = function (nums) {
  const numberMap = {}; // Inicializa un objeto vacío para el hashmap

  // Itera a través del arreglo
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Si el número ya existe en el hashmap, aumenta su contador
    if (numberMap[num]) {
      numberMap[num] += 1;
    } else {
      // Si el número no existe, crea una nueva entrada con el número y lo establece en 1
      numberMap[num] = 1;
    }
  }

  return numberMap;
};

const numbers = [4, 1, 2, 1, 2];
const numberMap = singleNumber(numbers);

console.log(numberMap);

/* function findUniqueElement(nums) {
  let unique = 0;

  for (const num of nums) {
    unique ^= num;
  }

  return unique;
}

const numbers = [4, 1, 2, 1, 2];
const uniqueNumber = findUniqueElement(numbers);

console.log("El número único es:", uniqueNumber); */

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
