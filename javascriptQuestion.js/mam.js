
// // document.querySelector("one")

// let htag = document.querySelector(".one")

// htag.textContent += " arslan";

// htag.classList.remove('one')


let btnone = document.querySelector('.one')

let btntwo = document.querySelector('.two')

// btnone.innerHTML = "M shi hu"

btnone.addEventListener('click',function(){
    btnone.classList.add('otherone');
    btntwo.style.display = 'none'
});

btntwo.addEventListener('click',function() {

    btntwo.classList.add('othertwo');
    btnone.style.display = 'none'
    
});


let head = document.getElementById("head")

console.log(head);
