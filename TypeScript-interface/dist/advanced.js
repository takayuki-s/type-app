"use strict";
var _a, _b;
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
