// function overloading

import { ICordinate } from "./Interface";

export function parseCoordinate(obj: ICordinate): ICordinate;
export function parseCoordinate(x: number, y: number): ICordinate;
export function parseCoordinate(arg1: any, arg2?: any): ICordinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as ICordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
// Function
// Normal function
function addNumber(a: number, b: number): number {
  return a + b;
}
addNumber(3, 15);
// Arrow function
const addStrings = (x: string, y: string): string => {
  return x + y;
};
addStrings("Tran Van", "Dat");
// Default function
function addNumberWithDefault(x: number, y = 13): number {
  return x + y;
}
console.log(addNumberWithDefault(3, 13));
// Union function
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} ${description} ${amount}`;
}
// Void function
function displayProfile(email: string, contact: string, phone: string): void {
  console.log({ email, contact, phone });
}
displayProfile(
  "Tranvandat@gmail.com",
  "tranvandatcontact@yahoo",
  "077777777777"
);
// Promise functions
const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Get data from ${url}`);
};
// Rest parameters
const restFunction = (number: number, ...restNumber: number[]): number => {
  return number + restNumber.reduce((acc, cur) => acc + cur, 0);
};
console.log(restFunction(12, 1, 2, 3, 4));
// With callback
function handleFile(text: string, callback: () => void): void {
  console.log("Function callBack");
  callback();
}
handleFile("abc", () => {
  console.log("bcd");
});
// Params with params
// Function as types
type updateArray = (n: number) => number;
function handleFilterArray(numbers: number[], filter: updateArray): number[] {
  return numbers.map((item) => filter(item));
}
handleFilterArray([1, 2, 3, 4, 5], (n) => n * 5);
// Function return function

function handleValue(val: number) {
  return (n: number) => n * val;
}
const value = handleValue(9);
console.log(value(10));
