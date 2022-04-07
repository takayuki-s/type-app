interface Nameable {
  name: string;
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}
  greeting(message: string) {
    console.log(message);
  }
}

const human = {
  name: "Quill",
  age: 38,
  experience: 3,
  greeting(message: string): void {
    console.log(message);
  },
};

const tmpDeveloper = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};
const user: Human = tmpDeveloper;
let developer = new Developer("Quill", 38, 3);
developer.name = "Teke";
