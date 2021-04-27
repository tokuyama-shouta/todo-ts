import React,{useState} from 'react';
import { createLogicalNot } from 'typescript';
import './App.css';

const name = "hello";

let nameChange = "hello";
nameChange ="hello2";

let username = "Hello";
let dummyNum = 2;
let bool: boolean = true;

let array = [true, false, true];
let array2 = [0,1,"hello"];

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = {first: "Yamada", last: "Taro"};

const func1 = (x: number, y: number):number => {
  return x + y;
}

//Intersection Types

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  passwaord: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  passwaord: "yyy"
}

// Union Types

let value: boolean | number;
value = true;
value = 12;

let arrayUni: (number | string)[];
arrayUni = [0,1,2,"hello"];

let company: "Facebook" | "google" | "Amazon"
company = "Amazon";

let memory: 256 | 512;
memory = 512;

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS
key = "primary";

//typeof + keyof


const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum!!!
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number,
  OSType: OS;
}
const PC1: PC = {
  id:1,
  OSType: OS.Windows
}
const PC2: PC = {
  id:2,
  OSType: OS.Mac,
}


const App: React.FC = () => {
  

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
    

  );
}

export default App;
