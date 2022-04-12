function copy<T>(value: T): T {
  return value;
}
function extendsCopy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy<string>("hello"));
console.log(copy({ name: "Quill" })); // 型推論
console.log(extendsCopy({ name: "Quill" })); // {name: "文字列"}の形でないとエラーとなる
