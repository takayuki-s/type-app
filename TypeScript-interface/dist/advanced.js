"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase("hello");
const upperHello2 = function (x) {
    return 0;
};
upperHello2("hello"); // string
upperHello2(2); // number
let intersectionFunc; // FuncB & FuncA とすると、FuncBから参照/適用されていくので、順番も意識
intersectionFunc = function (a, b) {
    return 0;
};
let unionFunc;
unionFunc = function (a) {
    return "hi";
};
unionFunc = function (a) {
    return 38;
};
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
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
const designer = {
    name: "Quill",
    role: "Design",
};
const downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user"; // userがない場合、"no-user"が代入される
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target = "hello";
let source = "hello";
target = source; // これはできるが、source = target はできない
let color = Color.RED;
let num = 0;
color = num;
num = Color.RED;
// fn = fn2 としようとすると、エラーになる
let fn = function (a) { };
let fn2 = function (a, b) { };
class AdvancedPerson {
    constructor() {
        this.name = "Peter";
    }
}
class AdvancedCar {
    constructor() {
        this.name = "Prius";
        this.age = 4;
    }
}
let person = new AdvancedPerson();
let car = new AdvancedCar();
person = car; // できる
// レストパラメータの型定義（配列）
function advancedFn(...args) { }
advancedFn(1, 2, 3, 4, 5);
// レストパラメータの型定義（タプル型）
function advancedFn2(...args) { }
advancedFn2(1, "apple", true);
// constアサーション（as const）
let milk = "milk"; // milk型になる
let drink = milk;
const array = [10, 20]; // タプル型になるし、readonlyになる
const peter = {
    name: "peter",
    age: 38,
};
const proto = {
    model: "proto00",
    version: 1.0,
    isProto: true,
};
const protoMachine01 = {
    model: "proto01",
    version: 1.1,
    isProto: true,
};
