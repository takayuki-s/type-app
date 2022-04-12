function copy<T>(value: T): T {
  return value;
}
function extendsCopy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy<string>("hello"));
console.log(copy({ name: "Quill" })); // 型推論
console.log(extendsCopy({ name: "Quill" })); // {name: "文字列"}の形でないとエラーとなる

// keyof
type K = keyof { name: string; age: number }; // 基本的な記述方法
function keyofCopy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(keyofCopy({ name: "Quill", age: 38 }, "name"));
