"use strict";
function copy(value) {
    return value;
}
console.log(copy("hello"));
console.log(copy({ name: "Quill" })); // 型推論
