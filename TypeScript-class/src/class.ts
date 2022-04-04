class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const quill = new Person("quill");
console.log(quill);
