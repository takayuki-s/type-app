"use strict";
// 型注釈（型を明示的に宣言）
let hasValue = true;
let count = 11;
let float = 3.14; // 小数OK
let negative = -0.12; // マイナス値OK
let single = "hello";
let double = "hello";
let back = `hello`;
// 型推論（代入値から型を推論）
let hasValue2 = true;
let count2 = 10;
let float2 = 3.14; // 小数OK
let negative2 = -0.12; // マイナス値OK
let single2 = "hello";
let double2 = "hello";
let back2 = `hello`;
// オブジェクト
const person = {
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
const obj = {};
// 配列
const fruits = ["Apple", "Banana", "Grape"];
const fruit = fruits[0];
// fruits.push(21) // 文字列以外を入れようとするとエラーが出る
// fruit.reduce() // 文字列に使わないメソッドを使おうとするとエラーが出る
// 決まった内容の配列
const book = ["business", 1500, false];
book.push(21); // 初期値では4番目の要素を入れようとするとエラーが出るが、途中からの追加ではエラーが出ない
// console.log(book[3]); // 参照時にエラーが起きる
// 列挙型
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["SHORT"] = "SHORT";
    coffeeSize["TALL"] = "TALL";
    coffeeSize["GRANDE"] = "GRANDE";
    coffeeSize["VENTI"] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
var coffeeSize2;
(function (coffeeSize2) {
    coffeeSize2[coffeeSize2["SHORT"] = 0] = "SHORT";
    coffeeSize2["TALL"] = "TALL";
    coffeeSize2[coffeeSize2["GRANDE"] = 21] = "GRANDE";
    coffeeSize2[coffeeSize2["VENTI"] = 22] = "VENTI";
})(coffeeSize2 || (coffeeSize2 = {}));
const coffee = {
    hot: true,
    size: coffeeSize.TALL,
};
coffee.size = coffeeSize.SHORT;
// any型
let anything = true;
anything = "hello";
anything = ["hello", 33, true];
anything = {};
let banana = "banana";
banana = anything; // string型のbananaにany型のanythingを代入できてしまう
// Union型
let unionType = 10;
let unionTypes = [21, "hello"];
// unionType.toUpperCase() // 数値型の場合はエラー
unionType = "hello";
unionType.toUpperCase(); // 文字列型になったのでエラーがなくなる
// Literal型
const apple = "apple"; // "apple"で設定すると、"apple"以外はエラーとなる
const orange = "orange"; // 型注釈を当てなくても、型推論で"orange"となる
// Union型とLiteral型の複合でenum型のように使える（普通オブジェクトには適用できない）
let clothSize = "small";
// オブジェクトに適用したい場合
const cloth = {
    color: "white",
    size: "medium",
};
// 関数の型
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// void型（何も返さない場合）
function sayHello() {
    console.log("Hello!");
}
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
// callback関数
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
// unknown型
let unknownInput;
let anyInput;
let text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
// text = unknownInput // anyだとエラーにはならない
// unknown型を変数に入れたい場合
if (typeof unknownInput === "string") {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error"));
