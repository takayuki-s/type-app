// 型注釈（型を明示的に宣言）
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14; // 小数OK
let negative: number = -0.12; // マイナス値OK
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

// 型推論（代入値から型を推論）
let hasValue2 = true;
let count2 = 10;
let float2 = 3.14; // 小数OK
let negative2 = -0.12; // マイナス値OK
let single2 = "hello";
let double2 = "hello";
let back2 = `hello`;

// オブジェクト
const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};
// オブジェクトのネスト
const person2 = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

// 以下の方法でオブジェクトの型定義もできるが、keyの指定ができないので、一般的には使われない
const obj: object = {};
