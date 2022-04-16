function LoggingFactory(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Logging(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@LoggingFactory("Logging User")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
