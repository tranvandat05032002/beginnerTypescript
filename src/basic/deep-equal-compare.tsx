export function deepEqualCompare<T>(
  a: T extends any[] ? "don't pass an array here" : T,
  b: T extends any[] ? "don't pass an array here" : T
): boolean {
  return a === b;
}

deepEqualCompare(1, 1);
deepEqualCompare(true, true);
deepEqualCompare(false, false);
deepEqualCompare({}, {});
