let n = 5;

if (n > 0) {
    console.log("Positive Integer");

}
else {
    console.log("negative Integer");

}


age = 20;
if (age >= 18) {
    console.log("you can vote");

}
else {
    console.log("not elegible");

}

marks = 96;
if (marks > 90) {
    console.log("A");

}
else {
    console.log("B");

}
if (marks < 75 && marks > 50) {
    console.log("C");

}
else {
    console.log("Fail");

}

let usr = "abcde";
pass = 123456;
if (usr === "abcde" && pass === 123456) {
    console.log("login success");

}
else {
    console.log("login failed");

}


let data;
let name = "raj";

data = name || "N/A"
/*
if(name){
    data=name;
}
else{
    data="N/A";
}
    */
console.log(data);

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);

}


let choice = 2;
switch (choice) {
    case 1: {
        console.log("Tea");
        break;
    }
    case 2: {
        console.log("cofee");
        break;
    }
    case 3: {
        console.log("lassi");
        break;
    }
    default: {
        console.log("paani");

    }
}