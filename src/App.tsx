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




const App: React.FC = () => {
  

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
    

  );
}

export default App;
