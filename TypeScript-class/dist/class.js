"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("There is no subject");
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
let person2;
const quill = new Person("quill", 38);
quill.incrementAge();
quill.greeting();
const teacher = new Teacher("Teke", 33, "Math");
console.log(teacher.subject);
teacher.subject = "Music";
console.log(teacher.subject);
teacher.greeting();
console.log(Person.species);
console.log(Person.isAdult(35));
console.log(Teacher.species);
