"use strict";
class Score {
}
class Food {
    constructor(element) {
        this.element = element;
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this.elements.forEach((element) => {
            new Food(element);
        });
    }
}
const foods = new Foods();
