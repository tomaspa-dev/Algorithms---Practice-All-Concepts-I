"use strict";

//*****/2-HashTable/*****/
// // // Example 8 // //

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let cont = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      cont++;
    }
  }

  return cont;
};

// Input: (hours = [0, 1, 2, 3, 4]), (target = 2);
// Output: 3;
// Input: hours = [5,1,4,2,2], target = 6
// Output: 0

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));

// // // Example 8 // //

// // // Example 7 // //
// var shuffle = function (nums, n) {
//   let array = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) {
//       array[i] = nums[i / 2];
//     } else {
//       console.log(n);
//       array[i] = nums[n];
//       n++;
//     }
//   }
//   return array;
// };

//more optimal
// var shuffle = function (nums, n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(nums[i]);
//     res.push(nums[i + n]);
//   }
//   return res;
// };

// Input: (nums = [2, 5, 1, 3, 4, 7]), (n = 3);
// Output: [2, 3, 5, 4, 1, 7];

// Input: (nums = [1, 2, 3, 4, 4, 3, 2, 1]), (n = 4);
// Output: [1, 4, 2, 3, 3, 2, 4, 1];

// Input: (nums = [1, 1, 2, 2]), (n = 2);
// Output: [1, 2, 1, 2];

// const nums = [1, 2, 3, 4, 4, 3, 2, 1];
// console.log(shuffle(nums, 4));

// // // Example 7 // //

// // // Example 6 // //
// var finalValueAfterOperations = function (operations) {
//   let X = 0;

//   for (let operation of operations) {
//     if (operation.includes("++")) {
//       X++;
//     } else if (operation.includes("--")) {
//       X--;
//     }
//   }

//   return X;
// };

// const operations = ["--X", "X++", "X++"];
// console.log(finalValueAfterOperations(operations));

// const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)

// Input: const operations = ["--X","X++","X++"]
// Output: 1
// // // Example 6 // //

// // // Example 5 // //
// Array from permuttations

// var buildArray = function (nums) {
//   const ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     ans[i] = nums[nums[i]];
//   }
//   return ans;
// };

//Other solution
// var buildArray = function(nums) {
//   return nums.map(a=>nums[a]);
// };

//Input: nums = [0,2,1,5,3,4]
//Output: [0,1,2,4,5,3]
//Input: nums = [5, 0, 1, 2, 3, 4];
//Output: [4,5,0,1,2,3]
// const nums = [5, 0, 1, 2, 3, 4];
// const result = buildArray(nums);
// console.log(result);

// // // Example 5 // //

// // // Example 4 // //
// var numIdenticalPairs = function (nums) {
//   let goodPairs = 0;
//   const numCounts = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (numCounts.has(nums[i])) {
//       numCounts.set(nums[i], numCounts.get(nums[i]) + 1);
//       // console.log(numCounts);
//     } else {
//       numCounts.set(nums[i], 1);
//     }
//     // console.log(numCounts.entries());
//   }

//   for (const [key, value] of numCounts.entries()) {
//     goodPairs += (value * (value - 1)) / 2;
//     // console.log(key, value);
//   }
//   // console.log(numCounts);
//   return goodPairs;
// };
// //[1, 2, 3, 1, 1, 3];
// //[1,1,1,1]
// //[1,2,3]
// const nums = [2, 2, 1];
// const totalGoodPairs = numIdenticalPairs(nums);
// console.log(totalGoodPairs);
// console.log(`El número total de good pairs es: ${totalGoodPairs}`);

//Optimal
// var numIdenticalPairs = function (nums) {
//   let count = {};
//   let result = 0;

//   for (let num of nums) {
//     if (num in count) {
//       result += count[num];
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   }

//   return result;
// };

//Optimal Solution
// function numIdenticalPairs(A) {
//   let ans = 0;
//   const cnt = {};

//   for (let x of A) {
//       ans += cnt[x] || 0;
//       cnt[x] = (cnt[x] || 0) + 1;
//   }

//   return ans;
// }

// numIdenticalPairs(nums);
// // // Example 4 // //

// // // Example 3 // //
// const nums = [1, 3, 2, 1];

// var getConcatenation = function (nums) {
//   const ans = nums.concat(nums);
//   return ans;
// };

// console.log(getConcatenation(nums));

// // // Example 3 // //
// 1929. Concatenation of Array
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

// // Example 3 // //

// // Example 2 // //
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Example 2:

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// // Example 3:

// // Input: nums = [3,3], target = 6
// // Output: [0,1]

// // Constraints:

// // 2 <= nums.length <= 104
// // -109 <= nums[i] <= 109
// // -109 <= target <= 109

// var twoSum = function (nums, target) {
//   if (nums && nums.length > 1) {
//     const hashMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];

//       if (hashMap.has(complement)) {
//         return [hashMap.get(complement), i];
//       }

//       hashMap.set(nums[i], i);
//     }
//     return undefined;
//   }
// };
// // Example 2 // //
//Example1-TwoSum //2-HashTable//
// Entrada

// const nums0 = [];
// const target0 = 9;

// const nums1 = [-1, 10];
// const target1 = 9;

// const nums2 = [2, 7, 11, 15];
// const target2 = 9;

// const nums3 = [11, 15, 7, 2];
// const target3 = 9;

// const hashMap = function (array, target) {
//   // console.log(array, target1);
//   if (array && array.length > 1) {
//     const hashMap = new Map();

//     for (let i = 0; i < array.length; i++) {
//       const complement = target - array[i];
//       if (hashMap.has(complement)) {
//         return [hashMap.get(complement), i];
//       }
//       hashMap.set(array[i], i);
//     }
//     // console.log(hashMap);
//   }
//   return undefined;
// };

// const findIndex = hashMap(nums3, target3);
// console.log(findIndex);

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
