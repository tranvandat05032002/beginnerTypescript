export const device = <A, B extends keyof A>(myArray: A[], keys: B): A[B][] => {
  return myArray.map((item) => item[keys]);
};
//demo
// const obj = device([
//   { name: "tb1", price: 123 },
//   {
//     name: "tb2",
//     price: 456,
//   },
// ]);
