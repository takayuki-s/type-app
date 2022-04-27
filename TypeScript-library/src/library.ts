import axios from "axios";
import _ from "lodash";
console.log(_.shuffle([1, 2, 3, 4]));
namespace myApp {
  const hello = "hello in namespace";
  export const name = "Quill";
  export interface Nameable {
    name: string;
  }
}
let nameable: myApp.Nameable;
// const name = myApp.name;

// let name: string
// function name() {}
// enum name {}
// class name {}
// interface name {}
// type name = {}
namespace name {
  const first: string = "Peter";
}
