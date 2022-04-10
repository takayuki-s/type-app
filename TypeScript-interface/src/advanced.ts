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

const upperHello = toUpperCase("hello");

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
