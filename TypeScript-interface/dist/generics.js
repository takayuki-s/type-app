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
