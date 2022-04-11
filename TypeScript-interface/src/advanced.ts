import { flushSync } from "react-dom";

interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello = toUpperCase("hello");
const upperHello2: TmpFunc = function (x: string | number) {
  return 0;
};
upperHello2("hello"); // string
upperHello2(2); // number
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB; // FuncB & FuncA とすると、FuncBから参照/適用されていくので、順番も意識
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

interface FuncC {
  (a: number): number;
}
interface FuncD {
  (a: string): string;
}
let unionFunc: FuncC | FuncD;
unionFunc = function (a: string) {
  return "hi";
};
unionFunc = function (a: number) {
  return 38;
};

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// 型アサーションは以下の2種類
// const input = <HTMLInputElement>document.getElementById("input");
// const input2 = document.getElementById("input") as HTMLInputElement; // Reactでjsx書いている時などはこっちが望ましい
// // 直接書き換える場合は、()で囲んであげる
// (document.getElementById("input") as HTMLInputElement).value =
//   "initial input value";
// // !(Non-null assertion operator)を使って、nullじゃないと言い切る
// const input3 = document.getElementById("input")!;

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  role: "Design",
};

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first?: string;
      last?: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);

const userData = downloadedData.user ?? "no-user"; // userがない場合、"no-user"が代入される

type id = DownloadedData["id"];
type name = DownloadedData["id" | "user"];

enum Color {
  RED,
  BLUE,
}
let target = "hello";
let source: "hello" = "hello";
target = source; // これはできるが、source = target はできない
let color = Color.RED;
let num = 0;
color = num;
num = Color.RED;

// fn = fn2 としようとすると、エラーになる
let fn = function (a: string) {};
let fn2 = function (a: string, b: string) {};

class AdvancedPerson {
  name: string = "Peter";
}
class AdvancedCar {
  name: string = "Prius";
  age: number = 4;
}
let person = new AdvancedPerson();
let car = new AdvancedCar();
person = car; // できる

// レストパラメータの型定義（配列）
function advancedFn(...args: number[]) {}
advancedFn(1, 2, 3, 4, 5);
// レストパラメータの型定義（タプル型）
function advancedFn2(...args: readonly [number, string, boolean]) {}
advancedFn2(1, "apple", true);

// constアサーション（as const）
let milk = "milk" as const; // milk型になる
let drink = milk;
const array = [10, 20] as const; // タプル型になるし、readonlyになる
const peter = {
  name: "peter",
  age: 38,
} as const;
