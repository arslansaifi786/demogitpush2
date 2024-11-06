 

 let promiseone = new Promise((resolve ,reject)=>{

    let error = false;

    if (!error) {
        resolve({name : "arslan", password : "123"})
    }else{
        reject( "something went wrong.")
    }

 });

 promiseone.catch((error)=>{
    console.log(error);
 }).then((details)=>{
    console.log(details);
    return details.name;
 }).then((name)=>{
    console.log(name);
    
 }).finally(()=>{
    console.log(" ho gaya ");
    
 })
//  console.log(promiseone);
 