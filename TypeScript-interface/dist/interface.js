"use strict";
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log("Hello");
    }
}
const human = {
    name: "Quill",
    age: 38,
    greeting(message) {
        console.log(message);
    },
};
