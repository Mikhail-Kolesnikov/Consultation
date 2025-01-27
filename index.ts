console.log("Welcome to TS")

let x = 10; //пример неявного значения
//x = '10';

let y: number = 11;// пример явной типизации

let p: string;
p = "HI ALL"

let isDrunk: boolean = true;

//как типизировать объекты

type User = {
    firstName:string;
    isAdmin:boolean;

}

const user1: User = {
    firstName: "Mikhail",
    isAdmin:false
}
//интерфейсы

interface Monster{
    name:string,
    height:number,
    isAlive:boolean,
    isEvil:boolean
}

const frankenstein: Monster = {
    name:"Frankenstein",
    height:200,
    isAlive:true,
    isEvil:false
}
//расширение интефейсов

interface ExtendedMonster extends Monster{
    isFlying: boolean;
}

const dracula: ExtendedMonster={
    isFlying:true,
    name:"Vlad",
    height:178,
    isAlive:false,
    isEvil:true
}
//опциональные поля

interface Food {
    title:string;
    isSweet?:boolean
}
const pancake:Food={
    title:"Pancakes",
    isSweet:true
}
// Создать интерфейс город City
// со следующими полями
//  - name
//  - population - число горожан 
//  - riversName - опциональное поле название реки - 
//  - isTouristic - является ли туристическим или нет
//  - isCapital - является ли столицей 

// Создайте несколько объектов для этого интерфейса 

// дополнительно сделайте интерфейс - расширяющий город
// например, добавьте дату основания 

interface City{
    name:string;
    population:number;
    riversName:string;
    isTouristic:boolean;
    isCapital:boolean

}
interface DateOfFoundation extends City{
    dateOfFoundation:string
}

const saintPetersburg: DateOfFoundation = {
    name: "Saint Petersburg",
    population: 5380000,
    riversName: "Neva",
    isTouristic: true,
    isCapital: false,
    dateOfFoundation: "1703-05-27",
  };
  
  const dresden: DateOfFoundation = {
    name: "Dresden",
    population: 550000,
    riversName: "Elbe",
    isTouristic: true,
    isCapital: false,
    dateOfFoundation: "1206-03-31",
  };
//1
//let x = 10;
//let y = "Hello";
//2
let t: string= "Welcome"
t = "Hi"
//3
type Age ={
    myAge:number;
}
const person:Age={
    myAge:30
}
//4
type Animal ='cat'|'Dog'

type ExtetndedAnimal = Animal|'Parrot'

const myPet:ExtetndedAnimal = 'Parrot'
console.log(myPet)
//6

let fruits:string[];
fruits=["apple","banana"]
7//

let numbers:number[];
numbers= [3,4,6,7]

type Person ={
    name:string;
    age:number;
}
const person1:Person ={
    name:'Mikhail',
    age:39
}
interface Car{
    model:string;
    year:number;
    isElectrick:boolean;

}
const car:Car={
    model:'Tesla',
    year:2023,
    isElectrick:true
}
interface ElectricCarElectr extends Car{
    batteryCapacity:number
}
const tesla :ElectricCarElectr={
    model:'Tesla',
    year:2023,
    isElectrick:true,
    batteryCapacity:1900
    
}
interface Book {
    title:string
    author:string
    publishedYear?:number

}
const Haminguey:Book={
    title:"По ком звонит колокол",
    author:"Haminguey",
  
}
const Dostovsky:Book={
    title:"Бесы",
    author:"Достоевский",
  
}
function multiplay(a:number,b:number):number{
    return a*b
}
const res = multiplay(4,7)

const isEven = (num: number): boolean => num % 2 === 0;

function getLastElement (numbers:number[]):number{
    return numbers[numbers.length -1];

}
const array = [4,6,7,8,90]

console.log(getLastElement(array))

function describeWeather (weather: "sun"|"rain"|"snow"):string{
    switch(weather){
        case "sun":
      return "It's sunny outside. Don't forget your sunglasses!";
    case "rain":
      return "It's raining. You might need an umbrella.";
    case "snow":
      return "It's snowing. Stay warm and enjoy the winter!";
    }
}

function printCarInfo(car:Car)  {

}

function getFullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
  }
  

