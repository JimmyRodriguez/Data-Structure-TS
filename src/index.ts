import { ARRAY } from "./linear-data-structure/array/lds.Array";
import { Stack } from "./linear-data-structure/stack/lds.Stack";
//import { DrawingApp } from "./windows/window.canvas";


let arry = new ARRAY();
//let window = new WINDOWS("TITI",100,100);

console.log("Data Structure : Array - TypeScript");

console.log("oodNumber : ",arry.getOddNumbers());
console.log("names : ",arry.getNames());


console.log("Data Structure : Stack - TypeScript");

let stack = new Stack();
stack.push("Amar");
stack.push("Love");
stack.push("Puro");


console.log("Stack",stack.pop());
console.log("Stack",stack.pop());
console.log("Stack",stack.pop());
console.log("Stack",stack.pop());



