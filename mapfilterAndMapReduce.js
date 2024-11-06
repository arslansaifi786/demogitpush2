
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]


let rv1=arr.map(function myfun(key,index,array) {
    console.log(key);
    
})


let rv= arr.filter(function myfun(maal) {
    return maal%2==0
    
})
console.log(rv);


let ans = rv.reduce(function name(cv,ci) {
    return cv+ci
})
console.log(ans);


//---------------------------------------------------------------------------------------------------------------

let arr2=["vikas","arslan","puneet ","ankit","ramparkash"]

let value=arr2.filter(function myfun(maal) {
    return maal.length>5
    
})

console.log(value);


//----------------------------------------------------------third question-----------------------------------------------------------------------


 