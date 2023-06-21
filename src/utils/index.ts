export function total(a: number, b: number) {
  return a + b;
}
console.log(total(21, 12));
//Array
const names: string[] = ["2"];
names.push("3");

const ourTuple: [number, boolean, string] = [5, false, "Coding God was here"];
const outTuple2: [x: number, y: string] = [3, "abc"];
console.log(outTuple2, ourTuple);

const person: { name: string; age: number; gioitinh: boolean } = {
  name: "tranvandat",
  age: 21,
  gioitinh: false,
};
