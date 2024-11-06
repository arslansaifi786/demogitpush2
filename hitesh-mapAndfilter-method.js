
let arr=[10,20,30,40,50,60,70,80,90,100]

let rv=arr
.map((num)=>{
    return num*10
})
.map((num)=>{
    return num+1
})
.filter(function (num) {
    return num<=600
})

console.log(rv);
