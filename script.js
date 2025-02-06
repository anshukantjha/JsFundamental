// variables in javascript
// var , let , const

// var name = "someName"
// let name2 = "anotherName"
// const age = 21

// console.log(name2);
// name2 = "hack"
// console.log(name2);

// console.log(age);
// age = 20
// console.log(age);


// Datatypes 
// Primitive - String ,Numbers,Booleans ,Null,undefined
// Non-Primitive - Arrays Objects

// const name = 'hack'
// const age = 21
// const isCool = true
// const any = null
// const notDefined = undefined

// console.log(typeof(age));
// console.log(typeof(isCool));

// // H.W -> check & search for console.log(typeof(null));

// // STRINGS
// const name = "Hack";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(1,3));

// age = 22;
// const nameWithProfession = `hack is a programmer of ${age}`
// console.log(nameWithProfession);



// // Arrays
// const cars = ["Murcielago","BMW","TATA"]
// // accessing
// console.log(cars);

// // Array methods
// console.log(cars.pop());
// console.log(cars);

// const mult = [1,2,"anshu"]
// console.log(mult[2]);

// // Objects
// const person = {name:"Adam",age:22,address:{
//     street:"DSA ground",
//     city:"Purnea"
// }}

// // Access 
// // console.log(person.name);
// const {age} = person
// console.log(age);

// LOOPS
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// while (2<4) {
//     console.log("Yes");
// }

//High order array methods
// map
// cars.map((car)=>{
//     // block of code to be executed
//     console.log(car);
// }) 

// conditionals 
// if-else
// ternary
// switch

// let age = 12;
// if(age>18){
//     console.log("isValid");
// }else if(age>12){
//     console.log("kinda");
// }
// else{
//     console.log("notValid");
// }

// let num =4 
// let result = (num % 2 === 0) ?( "Even") :( "Odd");
// console.log(result);

// switch (key) {
//     case value:
        
//         break;
//         case value:
        
//         break;
//         case value:
        
//         break;
//     default:
//         break;
// }



// FUNCTIONS
// function nameOfFunction(params,par2,par3){
//     // function logic
// }

// function addNums(num1,num2){
//     return num1+num2;
// }
// console.log(addNums(5,7));

// arrow func.
// const addNum = (par1,par2) => par1+par2;

// console.log(addNum(2,7));



// callback function
// function fetchData(callback) {
//     setTimeout(()=>{
//         const data = "some data";
//         callback(data)
//     },1000);
// }

// fetchData((data)=>{
//     console.log("Data Recieved:",data);
// })

// Promises
function fetchData() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const data = "some data";
            if(data){
                resolve(data);
            }else{
                reject("Error:...")
            }
        },1000);
    })
}

// fetchData()
//     .then((data)=>{
//         console.log("Data Recieved:",data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

    // Async await

async function getData() {
        try {
            const data = await fetchData();
            console.log('Data Recieved:',data);
        } catch (error) {
            console.log("Error if try block failed");
        }
    }

    getData();