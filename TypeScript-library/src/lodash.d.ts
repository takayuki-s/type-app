import _ from "lodash";
declare module "lodash" {
  interface LoDashStatic {
    hello: string;
  }
}
// // declare const _: {
// //   shuffle<T>(arr: T[]): T[];
// // };
// declare namespace _ {
//   function shuffle<T>(arr: T[]): T[];
// }
