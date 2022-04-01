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

// 配列
const fruits: string[] = ["Apple", "Banana", "Grape"];
const fruit = fruits[0];
// fruits.push(21) // 文字列以外を入れようとするとエラーが出る
// fruit.reduce() // 文字列に使わないメソッドを使おうとするとエラーが出る

// 決まった内容の配列
const book: [string, number, boolean] = ["business", 1500, false];
book.push(21); // 初期値では4番目の要素を入れようとするとエラーが出るが、途中からの追加ではエラーが出ない
// console.log(book[3]); // 参照時にエラーが起きる
