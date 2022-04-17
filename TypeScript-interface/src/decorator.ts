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

function Component(template: string, selector: string) {
  console.log("Component Factory");
  return function (constructor: { new (): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    console.log("Component");
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = instance.name;
    }
  };
}

@LoggingFactory("Logging User")
@Component("<h1>{{ name }}</h1>", "#app")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
