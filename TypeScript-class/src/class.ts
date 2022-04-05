class Person {
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
  constructor(name: string, age: number, public subject: string) {
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
teacher.greeting();
