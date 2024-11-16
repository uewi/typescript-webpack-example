import axios from "axios";
import _ from "lodash";
import { gcd, pi } from "./utils";
import MyClass from "./MyClass";

interface Printable {
  print(): void;
}

abstract class Person {
  constructor(public fullName: string, public age: number) {}
  abstract talk(): void;
}

class Employee extends Person {
  constructor(
    public fullName: string,
    public age: number,
    private salary: number
  ) {
    super(fullName, age);
  }

  talk(): void {
    console.log("hi");
  }
}

class User implements Printable {
  /*
    public readonly first: string;
    public readonly last: string;
    private id: number = 0;

    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
*/
  constructor(public first: string, public last: string, private _id: number) {}

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    if (newId < 0) {
      throw new Error("This is not a positive number");
    }
    this._id = newId;
  }

  print(): void {
    console.log(this.first);
  }
}

class Admin extends User {
  public isAdmin: boolean = true;
}

const user1 = new User("Joe", "Normal", 20);
console.log(user1.fullName);
console.log(user1.id);
user1.id = 30;
console.log(user1.id);

const btn = document.getElementById("btn")! as HTMLButtonElement;
// const btn = document.querySelector<HTMLButtonElement>("btn")!;
const input = document.querySelector("input")! as HTMLInputElement;
// const input = document.querySelector<HTMLInputElement>("input")!;
const form = document.querySelector("form")!;
const ul = document.querySelector("ul")!;

// form.addEventListener("submit", function (e) {
//   e.preventDefault;
//   console.log("clicked");
//   console.log(input.value);
// });

// console.dir(input);
input.value = "text";

function handleSubmit(e: Event) {
  e.preventDefault();
  ul.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
}

form.addEventListener("submit", handleSubmit);

function sayHi(user: string = "user"): string {
  return `Hi ${user}`;
}

function print(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

print({ first: "John", last: "Normal" });

type Point = {
  x: number;
  y: number;
  z?: number;
};

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinate());

type Player = {
  readonly id: number;
  username: string;
};

const player: Player = {
  id: 1,
  username: "a",
};

type Circle = {
  radius: number;
  center: Point;
};

type Movie = {
  title: string;
  year: number;
  money: {
    budget: number;
    gross: number;
  };
};

const movie: Movie = {
  title: "a",
  year: 2024,
  money: {
    budget: 100000,
    gross: 150000,
  },
};

function profit(movie: Movie): number {
  const { budget, gross } = movie.money;
  return gross - budget;
  // return movie.money.gross - movie.money.budget;
}

console.log(profit(movie));

const users: string[] = ["John", "Jane"];

users.push("Joe");

const numbers: number[] = [1, 2, 3];

numbers.push(4);

const flags: Array<boolean> = [];

const points: Point[] = [];

points.push({ x: 0, y: 0 });

const board: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function half(money: number | string): number {
  if (typeof money === "string") {
    return parseFloat(money.replace("$", "")) * 0.5;
  } else {
    return money * 0.5;
  }
}

console.log(half("$1.2"));
console.log(half(1.2));

const myArr: (number | string)[] = [1, 2, "a"];

const prices: number[] | string[] = ["$10", "$20"];

let zero: 0 = 0;

type answer = "yes" | "no" | "exit";

const rgb: [number, number, number] = [10, 20, 30];

type MyTuple = [string, number];

const res: MyTuple = ["OK", 200];

enum Direction {
  NORTH,
  SOUTH,
  WEST,
  EAST,
}

console.log(Direction.WEST);

const enum ArrowKey {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

console.log(ArrowKey.UP);

interface Person {
  readonly id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  sayHi: () => string;
  sayHello(): string;
}

interface Employee extends Person {
  money: number;
}

interface Product {
  name: string;
  price: number;
  applyDiscount(percent: number): number;
}

interface Product {
  year: number;
}

const product: Product = {
  name: "p",
  price: 20,
  year: 2024,
  applyDiscount(percent: number) {
    return this.price * (1 - percent / 100);
  },
};

console.log(product.applyDiscount(10));

function identity<T>(item: T): T {
  return item;
}

console.log(identity<number>(20));
console.log(identity<string>("str"));

function randItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randItem<string>(["user1", "user2", "user3"]));
console.log(randItem<number>([1, 2, 3, 4, 5]));

function merge<T extends Object, U extends Object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

function quadruple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(4);
  }
  return value * 4;
}

((str?: string) => {
  if (str) {
    for (let char of str) {
      console.log(char);
    }
  } else {
    console.log("not found");
  }
})("abcd");

interface Song {
  title: string;
  duration: number;
}

interface TV {
  title: string;
  count: number;
  duration: number;
}

function getDuration(value: TV | Song) {
  if ("count" in value) {
    return value.count * value.duration;
  }
  return value.duration;
}

console.log(getDuration({ title: "tv", count: 10, duration: 60 }));
console.log(getDuration({ title: "song", duration: 5 }));

function isTV(value: Song | TV): value is TV {
  return (value as TV).count !== undefined;
}

interface Cat {
  age: number;
  kind: "cat";
}

interface Dog {
  age: number;
  kind: "dog";
}

type Animal = Cat | Dog;

const animal = { age: 1, kind: "cat" };

function getAnimal(animal: Animal) {
  switch (animal.kind) {
    case "cat":
      return "It is a cat";
      break;
    case "dog":
      return "It is a dog";
      break;
    default:
      const _check: never = animal;
      return _check;
  }
}

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<UserInfo>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    printUserInfo(res.data);
  })
  .catch((e) => {
    console.log("Error", e);
  });

axios
  .get<UserInfo[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.forEach(printUserInfo);
  })
  .catch((e) => {
    console.log("Error", e);
  });

function printUserInfo(user: UserInfo) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
  console.log("\n");
}

console.log(_.sample([1, 2, 3, 4, 5, 6, 7, 8, , 9, 10]));

console.log(gcd(100, 25));
console.log(pi);

const username = new MyClass("abc");
username.print();
