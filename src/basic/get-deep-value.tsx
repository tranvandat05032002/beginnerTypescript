export const nestedObject = <T, K extends keyof T, SK extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: SK
) => {
  return obj[firstKey][secondKey];
};
const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 10,
  },
};
nestedObject(obj, "foo", "a");
