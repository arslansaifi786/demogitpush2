

let inputfileld = document.querySelector(".display");
// console.log(inputfileld);

let bttns = document.querySelectorAll(".bttn");
// console.log(bttns);

let countbttns = document.querySelectorAll(".cbttn");
// console.log(countbttns);

countbttns.forEach((bttn)=>{

    bttn.addEventListener("click",function (event) {
        // console.log("click");

        let count = event.target.innerText

        inputfileld.textContent += count;   

        // console.log(count);  
        // console.log();
        
        

        // console.log(countbttns[1]);
        

        // for (let btn of countbttns) {
        //      let val = btn.value
        //      inputfileld.innerText = val
        //     console.log(val);
            
            
            //  console.log(count);
             
        // }
    })

})
