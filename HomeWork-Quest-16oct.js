

// Q->{1}

let transactions = [
    { type: "income", value: 1000 },
    { type: "expense", value: 200 },
    { type: "income", value: 1200 },
    { type: "expense", value: 500 }
];

let check = transactions.filter((item) => {
    return item.type == "income"

})

// console.log(check);

let rv = check.reduce((acc, item) => {
    return acc + item.value
}, 0)
console.log(rv);

// Q-{2}



// write a function that takes an array of orders, where each order has an id, quantity, and pricePerItem, and calculates the total cost of all orders.
// javascript

const orders = [
    { id: 1, quantity: 2, pricePerItem: 500 },
    { id: 2, quantity: 1, pricePerItem: 1500 },
    { id: 3, quantity: 4, pricePerItem: 300 }
];


let totalcost = orders.map((maal)=>{
    return maal.quantity*maal.pricePerItem
})
.reduce((acc,totalcost)=>(acc+totalcost),0)


console.log(totalcost);




// Q->{3} 
    
// given an array of objects representing products, each with a name and price, write a function that returns an array of product names, but only for products that cost more than ₹500.

const products = [
  { name: "Laptop", price: 75000 },
  { name: "Mobile", price: 15000 },
  { name: "Book", price: 500 },
  { name: "Headphones", price: 2000 }
];

let name=products.filter((maal)=>{

    return maal.price>500 
})
.map((maal)=>{
    return  maal.name
})
console.log(name);
