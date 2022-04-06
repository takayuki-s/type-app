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
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this._subject}.`);
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
}
const teacher = new Teacher("Quill", 38, "Math");
teacher.greeting();
