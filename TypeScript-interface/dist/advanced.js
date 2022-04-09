"use strict";
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
    return "";
}
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
// 型アサーションは以下の2種類
const input = document.getElementById("input");
const input2 = document.getElementById("input"); // Reactでjsx書いている時などはこっちが望ましい
// 直接書き換える場合は、()で囲んであげる
document.getElementById("input").value =
    "initial input value";
// !(Non-null assertion operator)を使って、nullじゃないと言い切る
const input3 = document.getElementById("input");
const designer = {
    name: "Quill",
    role: "Design",
};
