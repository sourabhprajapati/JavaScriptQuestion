//Question 1
// let a=[];
// let b=[];
// console.log(a==b);
// console.log(a===b);
//output
// false
// false
//ans-In both array address is compara and address is different in both array
//Question 

//Question 2
// let a=[];
// let b=a;
// console.log(a==b);
// console.log(a===b);
//output
//true
//true
//ans- address of array a is assign to the b variable that is why both value have same addres

//Question 3
// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);
//output
//true
//true
//ans- In both array value is compara not the address

//Question 4
// let z=[1,2,3,4];
// let a={ name:"anil"};
// console.log(...z);
//output
// 1 2 3 4
//ans-it destructure the array 

//Question 5
// console.log(typeof NaN);
//output-number

//Question 6
// let data=10 - -10;
// console.log(data);
//output
// 20
//ans  - - will become + 

//Question 7
// const set = new Set([1,1,2,3,4]);
// console.log(set);
//output
// { 1, 2, 3, 4 }
//ans- set remove duplicate element

//Question 8
// let data= { name:"anil"};
// console.log(delete data.name)
//output 
// true
//ans- it will return true or false if the element will delete or not.

//Question 9
// let data= { name:"anil"};
//  console.log(delete data)
// //output
// false
//ans- it will only delete the proprtie of the object not delete the object

//Question 10
// const data=["sourabh","kajal","rahul"]
// const [y,x]=data;
// console.log(y,x);
// //output
// sourabh kajal
//ans- it will assign first two value

//Question 11
//to get second output
// const data=["sourabh","kajal","rahul"]
// const [,x]=data;
// console.log(x);
// //output
// kajal

//Question 12
//how to get age property without . operator
// const data={ name:'sourabh',age:23,skill:'js'}
// const {age}=data;
// console.log(age)
// //output
// 23

//Question 13
//Merge 2 object
// let data ={ name:'sourabh',age:23,skill:'js'}
// let info ={ city:"Noida", mail:"Sourabh@1"}
// data= {...data,...info};
// console.log(data);
// output
// {
//     name: 'sourabh',
//     age: 23,
//     skill: 'js',
//     city: 'Noida',
//     mail: 'Sourabh@1'
//   }

//Question 14
// let data ={ name:'sourabh',age:23,skill:'js'}
// let info ={ city:"Noida", mail:"Sourabh@1"}
// data= {data,...info};
// console.log(data);
// output
// {
//     data: { name: 'sourabh', age: 23, skill: 'js' },
//     city: 'Noida',
//     mail: 'Sourabh@1'
//   }

//Question 15
// let data ={ name:'sourabh',age:23,skill:'js'}
// let info ={ city:"Noida", skill:"node"}
// data= {...data,...info};
// console.log(data);
// output
// { name: 'sourabh', age: 23, skill: 'node', city: 'Noida' }

//Question 16
// const name="sourabh";
// console.log(name());
// output
// TypeError: name is not a function

//Question 17
// const result= false || {} || null;
// console.log(result);
// output
// {}

//Question 18
// const result= null|| false || " ";
// console.log(result);
// output
//  blank

//Question 19
// const result= [] || 0 || true;
// console.log(result);
// output
//  []

//Question 20
// console.log(Promise.resolve(5))
// output
// Promise { 5 }

//Question 21

// JSON.parse();
//It convert json to a java Script value

//Question 21
// let name='sourabh';

// function getNmae(){
//     console.log(name);
//     let name="prajapati"
// }
// getNmae();
// output
// ReferenceError: Cannot access 'name' before initialization

//Question 22
// let name='sourabh';

// function getNmae(){
//     console.log(name);
   
// }
// getNmae();
// output
// sourabh

//Question 23

// function sumValues(x,y,z){
//     return x+y+z;
// }

// console.log(sumValues(...[1,2,3]))
// output
// 6

//Question 24
// const name="sourabh";
// console.log(!typeof name ==="object")
// console.log(!typeof name ==="string")
// output
// false
// false

//Question 25

// let name="sourabh";
// let age=11

// console.log(isNaN(name));
// console.log(isNaN(age));
// output
// true
// false

//Question 26
//remove first element
// let data=[2,3,4,5];
// data.shift();
// console.log(data);
// output
// [ 3, 4, 5 ]

//Question 27
// remove last element
// let data=[2,3,4,5];
// data.pop();
// console.log(data);
// output
// [ 2, 3, 4 ]

//Question 28

// let data={
//     name:"anil"
// };
// delete data.name;
// console.log(data);
// output
// {}

//Question 29
// convert data to boolean false value
// let data="true";
// console.log(!data)
// output
// false

//Question 30
// convert data to boolean true value
// let data="true";
// console.log(!!data)
// output
// true

//Question 31
//Difference between map and ForEach function
//ans- map will return something but foreach loop will not 

//Question 32

// let data =["anil","sourabh","kajal"]
// delete data[1];
// console.log(data);
// output
// [ 'anil', <1 empty item>, 'kajal' ]

//Question 33
// let a=[1,2,3];
// let b=[4,5,6];
// let c=[...a,...b];
// console.log(c)
// output
// [ 1, 2, 3, 4, 5, 6 ]

//Question 34
// let a=[1,2,3,4];
// let b=[4,5,6];
// let c=[...a,...b];
// console.log(c)
// output
// [
//     1, 2, 3, 4,
//     4, 5, 6
//   ]

//Question 35
// let c= 3**3;
// console.log(c);
// output
// 27

//Question 36

// let a=6;
// setTimeout(()=>{
//   console.log(a);
// },0)
//  a=100;
// output
// 100

//Question 37

// let a=2;
// let A=30;
// console.log(A);
// output
// 30

//Question 38

// let a="like";
// let b= `like`;
// console.log( a===b);
// output
// true

//Question 39

// let a=1;
// let c=2;
// console.log( --c===a)
// output
// true

//Question 40

// let a=1;
// let b=1;
// let c=2;
// console.log(a === b === --c)
// output
// false

//Question 41

// console.log(3*3);
// console.log(3**3);
// console.log(3***3);//error three start show
// output
// SyntaxError: Unexpected token '*'

//Question 42

// console.log(a);
// let a;
// output
// undefined

//Question 43

// console.log(b);
// output
// b is not define

//Question 44
// console.log([[[[]]]]);
// output
//  nested array will show

//Question 45
// How to find OS name

// navigator.platform
// output
// "win32"

//Question 46

// function fruit() {
//     console.log(name);
//     console.log(price);

//     var name="apple";
//     let price =20;

// }
// fruit();
// output
// undefined
// cannot access

//Question 47

// for (var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1)
// }
// output
// 3
// 3
// 3

//Question 48
// console.log(+true);//it convert into number
// console.log(typeof +true)   
// output
// 1
// number

//Question 49

// console.log(!"anil");
// console.log(typeof ("anil"))
// output
// false
// string

//Question 50

// let data="size";
// const bird ={
//     size:"small"
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);
// output
// small
// small
// small
// undefined

//Question 51

// let c={ name:"peter"};
// let d;

// d=c;
// c.name="anil";
// console.log(d.name);//because both variable has same memory location
// output
// anil


//Question 52

// var x;
// var x=10;
// console.log(x);
// output
// 10

//Question 53
// var x;
// let x=10;
// console.log(x);
// output
// SyntaxError: Identifier 'x' has already been declared

//Question 54

// let a=3;
// let b=new Number(3);

// console.log( a==b);
// console.log( a===b);// b is a object
// output
// true
// false

//Question 55

// let name;
// nmae = {};//typo!
// console.log(nmae);
// output
// {}
//Question 56

// function fruit(){
//     console.log("woof!");
// }

// fruit.name="apple";
// fruit();
// output
// woof!

//Question 57
//   function sum(a,b){
//     return a+b;
//   }

//   console.log(sum(1,"2"));
//   output
//   12

//Question 58

// let num=0;
// console.log(num++);
// console.log(++num);
// console.log(num);
// output
// 0
// 2
// 2

//Question 59

// function getage(...args){
//     console.log(typeof args)
// }

// getage(21);
// output
// object

//Question 60

// function getage(){
//     "use strict";
//     age=21;
//     console.log(age);
// }
//  getage();
//  output
//  ReferenceError: age is not defined

//Question 60
//  const sum= eval ("10*10+5");// it convert string into expression
//  console.log(sum);
//  output
//  105
//Question 61
// const obj={ 1:"a",2:"b", 3:"c"};

// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// output
// true
// true

//Question 62

// const obj={ a:"one", b:"two",a:"repeat"}
// console.log(obj);
// output
// { a: 'repeat', b: 'two' }
//Question 63

// // const foo =()=> console.log("first");
// // const bar =()=> setTimeout(()=> console.log("second"));
// // const baz=()=> console.log("third");

// // bar();
// // foo();
// // baz();
// // output
// // first
// // third
// second

//Question 64

{/* <div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('first div')">
           click!
        </button>
    </div>
</div> */}
//Question 65

// const person ={ name:"anil"};

// function sayhi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayhi.call(person,21));
// console.log(sayhi.bind(person,21));
// output
// anil is 21
// [Function: bound sayhi]

//Question 66

// function sayhi(){
//     return (()=>0)();
// }
// console.log(typeof sayhi());
// output
// number

//Question 67

// console.log(typeof typeof 1)

// output
// string

//Question 68

// const num=[1,2,3];
// num[6]=11;
// console.log(num);
// output
// [ 1, 2, 3, <3 empty items>, 11 ]

//Question 69

// const numbers=[1,2,3];
// numbers[9]=numbers;
// console.log(numbers);
// //output
// <ref *1> [ 1, 2, 3, <6 empty items>, [Circular *1] ]//Infinite nested array will form

//Question 70

// Everything in javaScript is either a primitive or Object;

//Question 71

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
// output
// false
// false
// true

//Question 72

// console.log([..."anil"]);
// output
// [ 'a', 'n', 'i', 'l' ]

//Question 72

// const firstpromise =new Promise((res,rej)=>{
//     setTimeout(res,500,"one");
// })

// const Secondpromise =new Promise((res,rej)=>{
//     setTimeout(res,100,"two");
// })

// Promise.race([firstpromise,Secondpromise]).then(res=>console.log(res));
// output
// two

//Question 73

// let person ={ name:"peter"};
// const members=[person];
// person=null;
// console.log(members)
// output
// [ { name: 'peter' } ]

//Question 74

// const person ={
//     name:"batman",
//     age:21,
// }

// for(const item in person){
//     console.log(item);
// }
// output
// name
// age

//Question 75
// let data=3+4+'5';
// console.log(typeof data);
// output
// string

//Question 76
// console.log(typeof 3+4+'5');
// ouitput
// number45

//Question 77

// console.log(typeof (3+4 + +'5'));
// output
// number

//Question 78
// console.log([]==[]);
// output
// false

//Question 79

// let data=[1,2,3].map((num)=>{
//     if(typrof num ==='number')return;
//     return num*2
// })


//Question 80

// function getInfo(member)
// {
//     member.name='anil';
// }

// const person={name:'sarah'}
// getInfo(person);
// console.log(person);
// output
// { name: 'anil' }

//Question 80

// function car(){
//     this.make ='tata';
//     return {make:'kia'};
// }

// const myCar=new car();
// console.log(myCar.make);
// output
// kia

//Question 81

// (
//     ()=>{
//         let x= (y=10);
//     }
// )();
// console.log(typeof x);
// output
// undefined
//Question 82
// (()=>{
//     let x=y=10;
// })();
// console.log(typeof y);
// output
// number

//Question 83
// (()=>{
//     let x=10;
// })();

// (()=>{
//     let x=10;
// })();

// console.log(typeof x)
// output
// undefined
//Question 84

// (()=>{
//     let x=y=10;
// }
// )();

// (()=>{
//     let x=y=20;
// }
// )();

// console.log(y)
// output
// 20
//Question 85

// let x=100;
// (
//     ()=>{
//         var x=20;
//     }
// )();
// console.log(x);
// output
// 100
//Question 86
// console.log(!true -true)
// output
// -1

//Question 87
// console.log(true + +"10");
// output
// 11