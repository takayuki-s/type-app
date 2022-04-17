function LoggingFactory(message: string) {
  console.log("Logging Factory");
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Logging(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("PropertyLogging");
  console.log(target);
  console.log(propertyKey);
}

function Component(template: string, selector: string) {
  console.log("Component Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Component");
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

@LoggingFactory("Logging User")
@Component("<h1>{{ name }}</h1>", "#app")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(public age: number) {
    console.log("User was created!");
  }
}

const user1 = new User(31);
const user2 = new User(32);
