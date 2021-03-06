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

// Classにジェネリクスを使用
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
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

// interfaceにジェネリクスを使用
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

// Utility型（型のライブラリ）
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>; // オプショナル
type ReadTodo = Readonly<Todo>; // readonly

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
fetchData.then((data) => {
  data.toUpperCase();
  console.log(data);
});
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

// デフォルトの型パラメータを指定
interface ResponseData<T = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

// Mapped Types（型のfor文）
let tmp2: ResponseData;
interface Vegetables {
  tomato: string;
  pumpkin: string;
}
type MappedTypes = {
  [P in keyof Vegetables]: string;
};

// Conditional Types（型のif文）
type ConditionalTypes = "tomato" extends string ? number : boolean; // tomato型がstring型に代入できるのであればnumber型、できないのであればboolean型
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
type DistributiveConditionalTypes = "tomato" | "pumpkin" extends "tomato"
  ? number
  : boolean;
let temp5: NonNullable<string | null>;
