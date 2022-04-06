class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  private readonly id: number = 32;
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher extends Person {
  get subject(): string {
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
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting(this: Teacher) {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`
    );
  }
}

let person2: Person;
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
