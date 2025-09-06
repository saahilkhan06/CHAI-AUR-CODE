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

const balance = 1000
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








