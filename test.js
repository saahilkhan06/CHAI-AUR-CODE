// let mytimestamp = Date.now()
// console.log(mytimestamp);
// let newdate = new Date()
// let weekday=newdate.toLocaleString('default',{
//     weekday : "long"
// })
// console.log(newdate);
// console.log(weekday);
// let myarray = [0,1,2,4,4,5]
// console.log(myarray);
// myarray.push(8,3)
// console.log(myarray);
// myarray.pop()
// console.log(myarray);
// myarray.unshift(10)
// console.log(myarray.includes(2));
// console.log(myarray.indexOf(4));
// arr1 = ['thor','hulk','luci']
// arr2 = ['super','bat','marvel']
// addarr= [...arr1,...arr2]
// console.log(addarr);
// const a = [1,2,3,[4,5],6,[7,8,[9]]]
// console.log(a);
// console.log(a.flat(Infinity));
// console.log(Array.isArray(a));
// console.log(Array.from("saahil"));
// obj={
//     name : "saahil",
//     age : 19,
//     work :'developer',
//     isloggedin :false,
//     email:"abcd@gmail.com"
// }
// console.log(obj);
// console.log(typeof(obj));
// console.log(obj["email"]);
// symb = Symbol("key")
// console.log(typeof(obj.age));
// Object.freeze(obj)
// obj.email="khanwe@gmail.com"
// console.log(obj);
// / obj.greeting();
// obj.greetingtwo();
// const tinderuser = {}
// tinderuser.id = 1234
// console.log(tinderuser);
// const ruser = {
//     email : "sasa.com",
//     fullname : {
//         firstname : "saahil",
//         lastname : "khan"
//     }
// }
// console.log(ruser.fullname.firstname);
// obj1={1:"a",2:"b"}
// obj2={3:"c",4:"d"}
// obj3={obj1,obj2}
// obj3 =Object.assign({},obj1,obj2)
// console.log(obj3);
// obj3 = {...obj1,...obj2}
// console.log(obj3);
// const users = [
//     {
//         id :1,
//         email:"hhh.com"
//     },
//     {
//         id :1,
//         email:"hhh.com"
//     },
//     {
//         id :1,
//         email:"hhh.com"
//     }
// ]
// console.log(obj);
// console.log(Object.entries(obj));
// console.log();
// console.log(obj.hasOwnProperty("islosggedin"));
// const company= {
//         name :"saahil",
//         rating:"10",
//         ownerofcompany :"khan"
// }
// const {ownerofcompany : boss} = company
// console.log(boss);
// {
//     "name" : "saahil"
//     "coursename" : "hindi js"
//     "price" :"free "
// }

// console.log("saahil\n".repeat(5));

// function myname(){
//     console.log("s");
//     console.log("a");
//     console.log("a");
//     console.log("h");
//     console.log("i");
//     console.log("l")
// }
// console.log(myname());
// myname()
// function addtwonum(num1,num2){
//     console.log(num1 + num2); 
// }
// function addtwonum(num1,num2){
//     result = num1+num2
//     return result
//     return num1+num2
// }
// result = addtwonum(3,5)
// console.log(result);
// function loginusermessage(username="sam") {
//     if (username === undefined) {
//         console.log("plz enter a username ");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log (loginusermessage("saahil"));
// function calprice(...num1) {
//     return num1
// }
// console.log(calprice(2,3,4,[2000]));
// user={
//     name :"saahil",
//     age : 20
// }
// function handleobject(obj={}) {
//     console.log(`username is ${obj.name} and price is ${obj.age}`);
    
// }
// handleobject(user)
// handleobject({
//     name:"saahil",
//     age:20
// })
// handleobject()
// function handleobject(obj={}) {
//     console.log(`username is ${obj.name} and price is ${obj.age}`);
// }

// handleobject({ name: "saahil", age: 20 });
// handleobject();

// narray =[1,2,3,4]
// function retvalue(get) {
//     return get[1]   
// }
// console.log(retvalue(narray));
// console.log(retvalue([1,2,3,4]));

// let a=10
// const b=20
// var c=30

// if (true) {
//  let a=10
//  const b=20
//  var c=30 
//  console.log("inner :",a);
 
// }
// console.log(a);
// console.log(b);
// console.log(c);
// array = [1,2,3,4]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);    
// }
// function one(){
//     const username="saahil"
//     function two() {
//         const website='youtube'
//         console.log(website);
        
//     }
//     console.log(username);
//     two()
// }
// one()
// if (true) {
//     const username ="saahil"
//     if (username === "saahil") {
//         const website ="youtube"
//         console.log(username+website);
        
//     }
//     console.log(username);
//     console.log(username);

// }
// console.log(username);
// console.log(addone(5));

// function addone(value){
//     return value+1
// }
// console.log(addtwo(5));

// const addtwo = function (value) {
//     return value + 2 
    
// }

// const user = {
//     name : "saahil",
//     age :99,
//     welcomemessage : function(){
//             console.log(`${this.name} , welcome to website`);
//             console.log(this);
            
//         }
        
//     }
// user.welcomemessage()
// user.name = "sam"
// user.welcomemessage()
// console.log(this);
// function chai(){
//     username = "saauhil"
//     console.log(this.username);
// }
// chai()

// const chai= () =>{
//     let username = "saahil"
//     console.log(this);
    
// }
// chai()

// const addtwo = (num1,num2) => (num2+num1)
// const addtwo = () => ({username : "hitesh"})

// console.log( addtwo());
// function add(num1,num2) {
//     console.log(num1+num2);   
// }
// add(5,5)

// function add(num1,num2) {
//     console.log(num1+num2);   
// }
// add(5,8)
 
// const addtwo=(num1,num2) => (num1+num2)
// console.log(addtwo(1,2));
// function myFunction() {
//   alert("Hello World!");
// }
// console.log(myFunction());
// myFunction();

// function add(num1,num2) {
//     return num1+num2
// }
// console.log(add(1,2)
// );
// const chai = (a) => (a)
// console.log(chai("hello"));
// (function chai() {
//     console.log("hello world");
// })();
// ((name) =>{
//     console.log(`wowwwwww ${name}`);
    
// })(`khan`)
// if(true){
// console.log(`hello`);
    
// }
// const isloggedin = true
// if (isloggedin) {
//     console.log(`hello`);
// }
// else{
//     console.log(`world`);
    
// }
// if (2==="2") {
//     console.log("same");
// }
// else{
//     console.log("not same");
    
// const score = 100
// if (score > 50) {
//     var power = "fly"
//     console.log(`power:${power}`);
    
// }
//     console.log(`power:${power}`)

// const balance = 1000
// if (balance<500) 
//     console.log("test")
//     console.log("test2")

// if (balance<500) {
//     console.log("less than 500"); 
// }else if(balance<750)
// {
//     console.log("less than 750");
    
// }else if (balance<900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("random");
    
// }
// const userloggedin = true
// const debit = true
// const loggedinfromgoogle = false
// const loggedinfromgmail= true
// if (userloggedin == debit) {
//     console.log(`allow to but courses`);  
// }
// if (loggedinfromgoogle || loggedinfromgmail) {
//     console.log(`logged in successfully`);
    
// }
// const score = `may`
// switch (score) {
//     case "jan":
//         console.log(`this is ${score}`);
//         break;
//     case "feb":
//         console.log(`this is ${score}`);
//         break;
//     case "maay":
//         console.log(`this is ${score}`);
//         break;

//     default:
//         console.log(`none of these are  ${score} 😔`);
        
//         break;
// }
// let usermail = BigInt
// if (usermail) {
//     console.log(`got you mail ${usermail}`);
// }
// else{
//     console.log(`no mail found`);
    
// }
// falsy values =
// false,0,-0,BigInt 0n ,"",null,undefined,NaN
// truthy values
// "0",true,[],"false",anything in string(space)

// if (usermail.length===0) {
//     console.log("array is epty");
    
// }
// const emptyobj = {
    // age : 20
// }
// if (Object.values(emptyobj).length === 0) {
//     console.log("object is empty");
    
// }
// let val1
// 1 = 5??10
// val1 = null?? 4
// console.log(val1);
// val1 = undefined??" "??18
// console.log(val1);

// condition ? true:false
// const val=100
// val>200?console.log("good rpoduct"):console.log("ad [roduct");
 
// element=[1,2,3]
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==5) {
        // console.log("5 number");
        
    // }
    // console.log(element);
    
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop ${j}`);
                
//     }    
// }

// for (let i =40;i<41;i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
        
//     }
// }
// let myarray = ["spidey","bat","super"]
// for (let index = myarray.length; index >=0; index--) {
//     const element = myarray[index];
//     console.log(element);
    
// }
// for (let i = 0; i < 10; i++) {
//     if (i==6) {
//         // console.log("5");
//         console.log('continued ')
        
//         continue;
//     }
//     console.log(i);
// }
// index = 0
// while (index<=10) {
//     console.log(`value of index is ${index}`);
//     index=index+2
// }
// let myarray = ['a','b','c','d']
// let arr=0
// while (arr<myarray.length) {
//     console.log(myarray[arr]);
//     arr++
    
// }
// let i=11
// do {
//     console.log(i);
//     i++
// } while (i<=10);
// arr = [1,2,4,5]
// for(const num of arr){
//     console.log(num);
// }
// greeting = "hello world"
// for (const greet of greeting) {
//     console.log(greet);
    
// }
// const map1 = new Map()
// map1.set('ind','india')
// map1.set('chn','china')
// map1.set('jpn','japan')
// console.log(map1);

// for (const [key,value] of map1) {
    // console.log(key,value);
    
// }

// const myobject ={
//     'game1':'bgmi',
//     'game2':'freefire'
// }
// for (const key in myobject) {
//   console.log(`${key} shorycut is for ${myobject[key]}`);
    // console.log(key);
    
// }
// let arr={
//     "ind":"india",
//     "usa" : "america",
//     "uk" : "united kingdom"
// }

// for(const key in arr){
//     console.log (arr[key]);
    
// }

// const arr=[1,2,3,4]
// for (const key in arr) {
//     console.log(key);
    
//     }

// const coding = ["java","js",'c','c++','python']
// const values=coding.forEach( (val) =>  {
//     console.log(val);
//     return val
    
    
// })
// console.log(values);

// function printme(val) {
//     console.log(val);
// }
// coding.forEach(printme)
// coding.forEach((val,index,array) =>{
// })
// const mynum = [1,2,3,4,5,6,7,8]
// const newnum=mynum.filter((num) =>{
//     return num             >4
    
// // })
// const newnum =[]
// mynum.forEach((num) => {
//     if (num>4) {
//         newnum.push(num)
//     }
// })
// console.log(newnum);

// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
// ];

// const userbook = books.filter((bks)=>(bks.genre==="History"))
// const userbooks = books.filter((pbs)=>{
//      return pbs.publish>1995
//     })
// console.log(userbooks);
// console.log(userbook); 
//  const newnum = mynum.forEach((num) => {
//     return num+10
//  })
//  console.log(newnum);
// const mynum = [1,2,3,4,5,6,7,8]
// const newnum=mynum
// .map((num)=>num+10)
// .map((num)=>num+5)
// .filter((num)=>num>20)
// console.log(newnum);
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// const mynum = [1,2,3,4,5]
// const initialnum= 0
// const newnum=mynum.reduce((acc,cvalue) => {return`current balance is${acc} and added wiht${cvalue}`})
// console.log(newnum);
// const mynum=[1,2,3,4,5,6,7,8]
// // const newnum=mynum.reduce(function(acc,cvalue){
//     // console.log(`acc : ${acc} and cvalue : ${cvalue}`);
// //     return acc+cvalue
// // },0)
// // console.log(newnum);

// //  const newnum=mynum.reduce((acc,cvalue)=>acc+cvalue,0) 
// //  console.log(newnum);
 
// // const shopping =[
// //     {
// //         itemname:"js",
// //         price:200
// //     },
// //     {
// //         itemname:"python",
// //         price:300
// //     },
// //     {
// //         itemname:"java",
// //         price:500
// //     }
// // ]
// // const cart = shopping.reduce((acc,item)=>acc+item.price,0)
// // console.log(cart);


// const mart = [
//     {
//        grocery : "daalrice",
//        price : 100
//     },
//     {
//         dairy:"milk",
//         price:50
//     },
//     {
//         chocolates : "kitkat",
//         price:100
//     },
//     {
//         drinks :"pulpy",
//         price:40
//     }
// ]
// const carttotal=mart.reduce((acc,total)=>acc+total.price,0)
// function applyDiscount(carttotal) {
//     if (carttotal > 1000) {
//         return { 
//             message: "20% discount applied!", 
//             finalAmount: carttotal - carttotal * 0.2 
//         };
//     } else if (carttotal > 500) {
//         return { 
//             message: "10% discount applied!", 
//             finalAmount: carttotal - carttotal * 0.1 
//         };
//     } else if (carttotal > 300) {
//         return { 
//             message: "Flat 100 off applied!", 
//             finalAmount: carttotal - 100 
//         };
//     } else {
//         return { 
//             message: "Offer not applied", 
//             finalAmount: carttotal 
//         };
//     }
// }
// console.log(applyDiscount(carttotal));
// const mart = [
//     { grocery: "daalrice", price: 100 },
//     { dairy: "milk", price: 50 },
//     { chocolates: "kitkat", price: 100 },
//     { drinks: "pulpy", price: 4000 }
// ];

// Calculate total
// const carttotal = mart.reduce((acc, item) => acc + item.price, 0);

// Discount logic
// function applyDiscount(carttotal) {
//     if (carttotal > 1000) {
//         return { 
//             message: "20% discount applied!", 
//             discount: carttotal * 0.2,
//             finalAmount: carttotal - carttotal * 0.2 
//         };
//     } else if (carttotal > 500) {
//         return { 
//             message: "10% discount applied!", 
//             discount: carttotal * 0.1,
//             finalAmount: carttotal - carttotal * 0.1 
//         };
//     } else if (carttotal > 300) {
//         return { 
//             message: "Flat 100 off applied!", 
//             discount: 100,
//             finalAmount: carttotal - 100 
//         };
//     } else {
//         return { 
//             message: "Offer not applied", 
//             discount: 0,
//             finalAmount: carttotal 
//         };
//     }
// }

// Generate Bill
// function generateBill(mart) {
//     console.log("===== 🛒 MINI BILL 🛒 =====");
//     mart.forEach((item, index) => {
//         const [name, value] = Object.entries(item).find(([k]) => k !== "price");
//         console.log(`${index + 1}. ${name} : ${value} -> ₹${item.price}`);
//     });

//     console.log("----------------------------");
//     console.log(`Total: ₹${carttotal}`);

//     const discountInfo = applyDiscount(carttotal);
//     console.log(discountInfo.message);
//     console.log(`Discount: -₹${discountInfo.discount}`);
//     console.log(`Final Amount: ₹${discountInfo.finalAmount}`);
//     console.log("============================");
// }

// generateBill(mart);
