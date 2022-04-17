"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggingFactory(message) {
    console.log("Logging Factory");
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Logging(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
function Component(template, selector) {
    console.log("Component Factory");
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                console.log("Component");
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector("h1").textContent = instance.name;
                }
            }
        };
    };
}
let User = class User {
    constructor(age) {
        this.age = age;
        this.name = "Quill";
        console.log("User was created!");
    }
};
User = __decorate([
    LoggingFactory("Logging User"),
    Component("<h1>{{ name }}</h1>", "#app")
], User);
const user1 = new User(31);
const user2 = new User(32);
