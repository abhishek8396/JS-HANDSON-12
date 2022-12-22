// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);


// setTimeout(()=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(3);
//             setTimeout(()=>{
//                 console.log(4);
//                 setTimeout(()=>{
//                     console.log(5);
//                     setTimeout(()=>{
//                         console.log(6);   
//                     }), 6000;   
//                 }), 5000;   
//             }), 4000;   
//         }), 3000;
//     }), 2000;
// }), 1000;

// let printnumber = (time, num)=>{
//     return new Promise((resolve, reject)=>{
//         if(num){
//             setTimeout(()=>{
//                 resolve(num())
                
//             },time)
           
//         }
//         else{
//             reject(console.log("No Number"))
//         }
//     })
// }
// printnumber(0, ()=> console.log("Number")), then(()=>{
//    return printnumber(1000,()=>)
// })
// for(var i = 0; i <= 10; i++){
//     print(i);
// }


// function print(i){
//     setTimeout(function(){
//         console.log(i)
//     },i*2000);
//

let x = function(state){
    return new Promise((resolve, reject)=>{
    if(state == 'yes'){
        resolve('Promise resolved');
    }else{
        reject('promise rejected')
    }
});
}
x('yes').then(response => console.log(response)).catch(err => console.log(err))