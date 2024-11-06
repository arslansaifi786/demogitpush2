
class a{
    constructor(name,age,education){
        this.naam=name
        this.umar=age
        this.padhai=education
    }
}

class b extends a{
    constructor(name,age){
        super(naam,age)
        this.naam=name
        this.umar=age
    }
}



let rtb= new b("arslan",19)

console.log(rtb);


console.log("arslan");
console.log("abcd");
