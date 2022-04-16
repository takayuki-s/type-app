"use strict";
function copy(value) {
    return value;
}
function extendsCopy(value) {
    return value;
}
console.log(copy("hello"));
console.log(copy({ name: "Quill" })); // 型推論
console.log(extendsCopy({ name: "Quill" })); // {name: "文字列"}の形でないとエラーとなる
function keyofCopy(value, key) {
    value[key];
    return value;
}
console.log(keyofCopy({ name: "Quill", age: 38 }, "name"));
// Classにジェネリクスを使用
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());
const tmpDatabase = {
    id: 3,
    data: [32],
};
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello");
    }, 1000);
});
fetchData.then((data) => {
    data.toUpperCase();
    console.log(data);
});
const vegetables = ["Tomato", "Broccoli", "Asparagus"];
let tmp;
// Mapped Types（型のfor文）
let tmp2;
let temp5;
