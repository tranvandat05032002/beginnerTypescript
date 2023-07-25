import { String, Union } from "ts-toolbelt";

const query = "/home?name=tranvandat&age=28";

type Query = typeof query;
type QueryPart = String.Split<Query, "?">;
type QueryElements = String.Split<QueryPart[1], "&">;

type QueryParams = {
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElements[number]];

export const objQueryResults: Union.Merge<QueryParams> = {
  name: "tranvandat",
  age: "28",
};
console.log(objQueryResults);
