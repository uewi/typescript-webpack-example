import { MyInterface } from "./types";

export default class MyClass implements MyInterface {
  constructor(public name: string) {}
  print(): void {
    console.log(this.name);
  }
}
