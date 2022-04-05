"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
let person2;
const quill = new Person("quill", 38);
quill.incrementAge();
quill.greeting();
