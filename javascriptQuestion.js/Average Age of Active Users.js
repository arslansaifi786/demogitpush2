
let arr = [{ name: 'Alice', age: 25, isActive: true }, 
           { name: 'Bob', age: 30, isActive: false },
           { name: 'Charlie', age: 35, isActive: true }]


           let rv = arr.filter((maal)=>{
            return maal.isActive == true;

           })
           .map((maal)=>{
            return maal.age
           })
           .reduce((acc,maal)=>{
            return acc+maal

           },0)
           console.log(rv);
           