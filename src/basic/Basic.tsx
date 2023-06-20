import React from "react";
import { statusCode } from "./Enum";

const Basic = () => {
  const person: { name: string; age: number; gioitinh: boolean } = {
    name: "tranvandat",
    age: 21,
    gioitinh: false,
  };
  console.log(person);
  const jobs: { [index: string]: number } = {};
  jobs.dev = 2000;
  console.log(jobs);
  const status: { [index: string]: number } = {};
  status.status = statusCode.NotFound;
  const mergeObject = Object.assign({}, person, jobs, status);
  console.log(mergeObject);
  //Aliases and interfaces
  //Aliases:
  type Color = string;
  type Name = string;
  type Bienso = number;
  type TypeCar = string;
  type car = {
    color: Color;
    name: Name;
    bienSo: Bienso;
    typeCar: TypeCar;
  };
  const colorCar: Color = "Xanh";
  const nameCar: Name = "Toyota123";
  const bienSoCar: Bienso = 12345;
  const typeCar: TypeCar = "Toyota";
  const myCar: car = {
    color: colorCar,
    name: nameCar,
    bienSo: bienSoCar,
    typeCar: typeCar,
  };
  //interface
  interface carToyota {
    name: string;
    height: number;
    width: number;
  }

  const toyota: carToyota = {
    name: "toyotaHonda",
    height: 20,
    width: 30,
  };
  console.log(myCar, toyota);

  const unionFunction = (code: number | string | boolean) => {
    console.log(`My status code ${code}`);
  };
  unionFunction(401);
  unionFunction("402");
  unionFunction(false);
  // types function
  const printNumber = (value: number): number => {
    return value;
  };
  console.log(printNumber(132123));
  //rest parameters
  const sumNumber = (number1: number, number2: number, ...rest: number[]) => {
    return number1 + number2 + rest.reduce((p, c) => p + c, 0);
  };
  console.log(sumNumber(1, 2, 3, 4, 5, 6));
  //aliases function
  type Negate = (value: number, ...rest: number[]) => number;
  const negateFunction: Negate = (value1, ...value2) => {
    return (
      value1 +
      value2.reduce((acc, curentValue) => {
        return acc + curentValue;
      }, 0)
    );
  };
  console.log(negateFunction(1, 2, 3, 4, 7, 30));
  const name: unknown = "helloWord";
  console.log((name as string).length);
  // generics function
  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2] as [S, T];
  }
  console.log("generics", createPair(3, 3));
  // TypeScript Utility Types
  //partial
  interface Point {
    x: number;
    y: number;
  }
  const pointPartPartial: Partial<Point> = {
    x: -89,
  };
  console.log("Partial", pointPartPartial);
  // Required
  const pointPartRequired: Required<Point> = {
    x: 12,
    y: 17,
  };
  console.log("required", pointPartRequired);
  const nameMap: Record<string, unknown> = {
    QuanSu: 1 / 100000,
    TheGioi: 1 / 100000000,
  };
  console.log("Record", nameMap);
  const pointOmit: Omit<Point, "y"> = {
    x: 13,
  };
  console.log("Omit", pointOmit);
  type PointGenerator = () => { x: number; y: number; };
    const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
    };
    console.log(point)
  return <div>bacis</div>;
};

export default Basic;
