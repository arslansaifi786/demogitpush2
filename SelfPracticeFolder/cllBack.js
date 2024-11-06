
// function greetUser(name, callback) {
//     console.log("Greeting ban raha hai...");
  
//     setTimeout(() => {
//       console.log(`Hello, ${name}!`);
//       callback(); 
//     }, 2000); 
//   }
  
//   function endGreeting() {
//     console.log("Greeting complete ho gaya!");
//   }
  

//   greetUser("Aman", endGreeting);
  


//   // second chat gpt ...

//   function performOperation(num1, num2, callback) {
//     return callback(num1, num2); // Callback ko call karte hain
//   }
  
//   // Addition ke liye callback function
//   function callback(a, b) {
//     return a + b;
//   }
  
//   // Multiplication ke liye callback function
//   function callback(a, b) {
//     return a * b;
//   }
  
//   // Callback pass karna
//   let sum = performOperation(5, 10, callback);
//   let product = performOperation(5, 10, callback);
  
//   console.log(`Sum: ${sum}`); // Output: Sum: 15
//   console.log(`Product: ${product}`); // Output: Product: 50
  


  function test(callback) {

    console.log("m tere se pahle chalunga");
    callback()
    setTimeout(() => {
        console.log("m baad m chalunga ");

    }, 3000);

  }

  function temp(){
        
    console.log("m ruka nhi rahunga  ");
    }

  test(temp);





//   let promiseone = new Promise(function innerfun(resolve , reject) {
//     console.log("1 sabse pahle chalunga ");

//     setTimeout(() => {
//         console.log("m 1 se   baad m chalunga 2");
        
//     }, 3000);




//     function temp() {
//         console.log("m m sabse baad m chalunga ");
        
//     }

//     temp()

//   })
  

//   console.log(promiseone);
  


let promiseone = new Promise((resolve , reject)=>{
    console.log("kaif");
    
    setTimeout(() => {
    //    console.log("1");
    resolve("mill gaya")
    }, 2000);

    console.log("ayera");
    
})

// console.log(promiseone);

promiseone.then((maal)=>{
    console.log(maal);

});
console.log(promiseone);



