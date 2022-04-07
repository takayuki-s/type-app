"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
console.log(addFunc(1, 2));
const nameable = {
    name: "Quill",
};
class Developer {
    constructor(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message) {
        console.log(message);
    }
}
const human = {
    name: "Quill",
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const tmpDeveloper = {
    name: "Quill",
    age: 38,
    greeting(message) {
        console.log(message);
    },
};
const user = tmpDeveloper;
let developer = new Developer(38, 3, "Quill");
developer.name = "Teke";
