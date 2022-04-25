import axios from "axios";
import _ from "lodash";
console.log(_.shuffle([1, 2, 3, 4]));
namespace myApp {
  const hello = "hello in namespace";
  export const name = "Quill";
}
const name = myApp.name;
