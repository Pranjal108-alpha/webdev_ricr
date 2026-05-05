   //CRUD
let arr=[12,25,45,56,48,93,69];  //create
/*
//read
for(var i=0;i<7;i++){
    console.log(arr[i]);
}
console.log(arr);

//updation
arr[2]=arr[2] + 20;
console.log(arr);

//delete
arr = [];
console.log(arr);
*/

arr.push(99);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(11);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(4));

console.log(arr.indexOf(48));

console.log(arr.includes(93));

let unar = [78,65,95,52,23,85,25,86];

console.log(unar);

unar.sort();

console.log(unar);

unar.reverse();

console.log(unar);


let ar = [78,65,95,52,23,85,25,86];

for(var i= 0;i<8 ;i++){
    console.log(ar[i]);
    
}

console.log("for each loop");

ar.forEach((Element)=>{
    console.log(Element);
    
})
