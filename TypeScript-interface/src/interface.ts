interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human = {
  name: "Quill",
  age: 38,
  greeting(message: string): void {
    console.log(message);
  },
};
