"use strict";
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
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
let developer = new Developer("Quill", 38, 3);
developer.name = "Teke";
