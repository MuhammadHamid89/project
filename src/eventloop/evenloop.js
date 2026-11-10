// console.log('A')
// console.log('B')
// console.log('c')
// node src/eventloop/evenloop.js (for run )

import { combineSlices } from "@reduxjs/toolkit"



// //event loop callstack
// function first(){
//     console.log('first function start');
//     second();
//     console.log('first function end');
// }
// function second(){
//     console.log('second function start');
//     third();
//     console.log('second function end');
// }
// function third(){
//     console.log('third function is runing');
// }
// first();


//event loop and callstack relationship javascript run line-by-line in this code take time
//example 1:
// console.log('start')
// for(let i=0; i<5000000000;i++){}  //heavy work block the stack
// console.log('end')

//example 2:
// console.log('start')
// setTimeout(()=>{
//     console.log('timer complete') //event loop take time it execute after start & end
// },2000)
// console.log('end')
//iska mtlb hain jo task time ly raha hain osko callstack my enter ni krna dosry ko kr dena hain jo time ni ly gy

////example 3:
// console.log('1')
// setTimeout(()=>{
//     console.log('2')
// },0)
// console.log('3')

//example 4:
// console.log('start')

// setTimeout(()=>{
//     console.log('timer 1')
// },3000)

// setTimeout(()=>{
//     console.log('timer 2')
// },1000)

// setTimeout(()=>{
//     console.log('timer 3')
// },2000)
// console.log('end')


//Example 5 with promises:
// console.log('start')
// Promise.resolve().then(()=>{
//     console.log('promise complete')
// })
// console.log('end')

// Example 6 settimeout and promise use:
console.log('A')
setTimeout(()=>{
    console.log('B-settimeout')
},0)

Promise.resolve().then(()=>{
    console.log('C- promise')
})

console.log('D')