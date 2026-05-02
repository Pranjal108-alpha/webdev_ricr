let a = 20, b = 30;

function sum(x, y) {
    let z = x + y
    console.log(z);

}

sum(a, b)



//this is function expression
//function expression are done using const
let abc = function () {
    console.log("Hello World");

}

console.log(abc);
//this is call back function abc


const arrowfun = () => {
    console.log("this is arrow function ");

}
arrowfun();

const addarrow = (a, b) => a + b;

console.log(addarrow(5, 6));
