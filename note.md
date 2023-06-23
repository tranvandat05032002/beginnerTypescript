mục 1: Khai báo 1 biến: const name: type = value
//any: truyền vào bất kỳ
//unknown:
vd: const aNumber: unknown;
aNumber = 100;
if(typeof anNumber === "number"){
aNumber.toFixed(2);
// do something with type is number.
}
//Never: không có giá trị, và thường sử dụng trong ngoại lệ và trả về một lỗi, tạo 1 vòng lặp vô hạn
vd:
function raiseError(err: string): never{
throw new Error(err);
}
//?: : có giá trị truyền vào hay không cũng k báo lỗi

mục 2: Khai báo 1 array:
const name: type[] = []
//readonly: không làm thay đổi mảng

mục 3: TypeScript Tuples:
định nghĩa: có nhiều kiểu dữ liệu bên trong 1 mảng và cố định:
vd: const ourTuple: [number, boolean, string] = [5, false, "tranvandat"];
//có tính chất của readonly như mảng
hoặc: const outTuple: [x: number, y: string] = [3, "abc"];

mục 4: TypeScript Object Types
vd: const person: {name: string, age: number, gioitinh: boolean} = {
name: "TranVanDat",
age: 21,
gioitinh: false
}
//có tính chất optional:
const person: {name: string, age: number, gioitinh?: boolean} = {
name: "TranVanDat",
age: 21
}
person.gioitinh = false;
//Index Signatures
const person: {[index: string]: number} = {}
person.dat = 21

mục 5: typescript Numeric Enums - Default

- Một enum là một "lớp" đặc biệt đại diện cho một nhóm các hằng số (các biến không thể thay đổi).
  enum statusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400  
  }

mục 6: Aliases and Interfaces
//aliases: cho phép bí danh kiểu dữ liệu
vd:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
year: CarYear,
type: CarType,
model: CarModel
}
//Interfaces: tương tự như aliases nhưng chỉ dành cho các object, tái sử dụng kiểu dữ liệu đã định nghĩa ở nhiều nơi.
//notes: khi name trùng nhau thì nó sẽ merge.
interface car {
name: string,
height: number,
width: number
}

const toyota: car = {
name: "toyotaHonda",
height: 20,
width: 30
}
// có tính kế thừa bằng từ khóa extends
vd: childrenInterface extends parentInterface {
định nghĩa interface muốn thêm tại đây
}
mục 7: TypeScript Union and intersection Types ("|", "&")
-Muốn một biến có nhiều hơn 1 kiểu dữ liệu
vd:
function printStatusCode(code: string | number) {
console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

type Assertions = Interface1 & Interface2 === merger === extends;
mục 8: TypeScript Functions

- định nghĩa giá trị trả về của một function hoặc không có giá trị trả về (void)
  vd:
  function getTime(): number{
  return new Date().getTime();
  }
  function printHellow(): void{
  console.log("helloword");
  }
  // có rest parameters
  vd:
  function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
  }
  //Type Alias
  type Negate = (value: number) => number;
  const negateFuntion: Negate = (value) => value - 1;

mục 9: typescript casting (as, <>)

- chuyển các kiểu không xác định như any, unknown về 1 kiểu nhất định
  ví dụ:
  const name: unknown = "helloword";
  console.log((name as string).length)
  console.log(<string>name.length)
  mục 10: TypeScript Generics
- tạo kiểu dữ liệu để sử dụng cho lớp, hàm, bí danh mà không cần phải định nghĩa rõ ràng
  vd:
  function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42));

- mục 11: TypeScript Utility Types (Partial, Required, Record, Omit, Pick, Exclude, ReturnType)

* Partial: thay đổi tất cả properties của một object thành các optional
  vd:
  interface Point {
  x: number;
  y: number;
  }

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

- Required: thay đổi tất cả các properties của một object thành required (bắt buộc)
  vd:
  interface SquareConfig {
  color?: string;
  name: string
  }
  const squareObject: Required<SquareConfig> = {
  color: "red",
  name: "abc"
  }
- Record(K, V): truyền dữ liệu khóa theo K, value theo V
  vd:
  const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
  };
  -Omit: xóa các khóa ra khỏi một đối tượng
  vd:
  interface Person {
  name: string;
  age: number;
  location?: string;
  }

const bob: Omit<Person, 'age' | 'location'> = {
name: 'Bob'
};

- Pick: xóa tất cả các đối tượng của object nhưng trừ các khóa được chỉ ra trong Pick
  interface Person {
  name: string;
  age: number;
  location?: string;
  }

const bob: Pick<Person, 'name'> = {
name: 'Bob'
// `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
-Exclude: xóa kiểu dữ liểu của union đã chỉ định trong Exclude
vd:
type Primitive = number|string|boolean;
const value: Exclude<Primitive, boolean> = number or string (if pass a boolean ==> Error)

- ReturnType: trích xuất kiểu trả về của một hàm.
  vd:
  type PointGenerator = () => { x: number; y: number; };
  const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
  };

mục 12: Functon overloding

- định nghĩa: function overloading là nhiều function cùng tên và mỗi function làm một chức năng nhất định, parameter truyền vào có thể tùy biến.
