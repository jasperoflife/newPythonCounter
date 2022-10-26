let newCounter = document.querySelector("h2");
newCounter.innerText = "JASPER";

let newNumber = document.querySelector("h2");
newNumber.style.color = "red";

const button1 = document.querySelector(".res");
const header1 = document.querySelector("h1");

function changeText() {
  let newCounter = document.querySelector("h1");
  newCounter.innerText = "0";
}
button1.addEventListener("click", changeText);


let btn = document.querySelector('.inc')

// function colored() {
//     let body = document.body
//     body.style.backgroundColor = 'blue'
    
// }
// btn.addEventListener('click', colored)

let heading = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')


function Decrease() {
    heading.innerText--   
}
dec.addEventListener('click', Decrease)

//reset
function Reset (){
    heading.innerText = 0
}
res.addEventListener('click',Reset )

function Increase() {
    heading.innerText++   
}
inc.addEventListener('click', Increase)