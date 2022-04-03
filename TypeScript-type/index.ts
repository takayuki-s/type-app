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

// 列挙型
enum coffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
enum coffeeSize2 {
  SHORT, // 0
  TALL = "TALL", // TALL
  GRANDE = 21, // 21
  VENTI, // 22
}
const coffee = {
  hot: true,
  size: coffeeSize.TALL,
};
coffee.size = coffeeSize.SHORT;

// any型
let anything: any = true;
anything = "hello";
anything = ["hello", 33, true];
anything = {};
let banana = "banana";
banana = anything; // string型のbananaにany型のanythingを代入できてしまう

// Union型
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];
// unionType.toUpperCase() // 数値型の場合はエラー
unionType = "hello";
unionType.toUpperCase(); // 文字列型になったのでエラーがなくなる

// Literal型
const apple: "apple" = "apple"; // "apple"で設定すると、"apple"以外はエラーとなる
const orange = "orange"; // 型注釈を当てなくても、型推論で"orange"となる

// typeエイリアスで型を変数化
type ClothSize = "small" | "medium" | "large";

// Union型とLiteral型の複合でenum型のように使える（普通オブジェクトには適用できない）
let clothSize: ClothSize = "small";
// オブジェクトに適用したい場合
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "medium",
};

// 関数の型
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 3);

// void型（何も返さない場合）
function sayHello(): void {
  console.log("Hello!");
}

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNumber = (num: number): number => num * 2;
