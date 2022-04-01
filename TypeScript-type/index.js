// 型注釈（型を明示的に宣言）
var hasValue = true;
var count = 10;
var float = 3.14; // 小数OK
var negative = -0.12; // マイナス値OK
var single = "hello";
var double = "hello";
var back = "hello";
// 型推論（代入値から型を推論）
var hasValue2 = true;
var count2 = 10;
var float2 = 3.14; // 小数OK
var negative2 = -0.12; // マイナス値OK
var single2 = "hello";
var double2 = "hello";
var back2 = "hello";
// オブジェクト
var person = {
    name: "Jack",
    age: 21
};
// オブジェクトのネスト
var person2 = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21
};
// 以下の方法でオブジェクトの型定義もできるが、keyの指定ができないので、一般的には使われない
var obj = {};
// 配列
var fruits = ["Apple", "Banana", "Grape"];
var fruit = fruits[0];
// fruits.push(21) // 文字列以外を入れようとするとエラーが出る
// fruit.reduce() // 文字列に使わないメソッドを使おうとするとエラーが出る
// 決まった内容の配列
var book = ["business", 1500, false];
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
var coffee = {
    hot: true,
    size: coffeeSize.TALL
};
coffee.size = coffeeSize.SHORT;
