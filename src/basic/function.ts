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
