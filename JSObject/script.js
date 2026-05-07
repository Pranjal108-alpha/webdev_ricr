
let arr=
[
{
  "name": "Aarav Sharma",
  "dob": "1998-04-12",
  "phoneNumber": "+91-9876543210",
  "profession": "Software Engineer",
  "place": "Delhi"
},
{
  "name": "Priya Verma",
  "dob": "1995-09-25",
  "phoneNumber": "+91-9123456780",
  "profession": "Graphic Designer",
  "place": "Mumbai"
},
{
  "name": "Rohan Mehta",
  "dob": "2000-01-18",
  "phoneNumber": "+91-9988776655",
  "profession": "Data Analyst",
  "place": "Bangalore"
},
{
  "name": "Sneha Kapoor",
  "dob": "1997-07-30",
  "phoneNumber": "+91-9012345678",
  "profession": "Doctor",
  "place": "Pune"
},
{
  "name": "Vikram Singh",
  "dob": "1993-11-05",
  "phoneNumber": "+91-9090909090",
  "profession": "Teacher",
  "place": "Jaipur"
}
]
arr.forEach((item) => {
  console.log(item["name"]);
})

//arr.map((Element,idx)=>)

console.log(arr);
//dot natation
//.console.log(arr[1].name);
//bracket notation
console.log(arr[1]["name"]);

let obj ={
  "name": "Vikram Singh",
  "dob": "1993-11-05",
  "phoneNumber": "+91-9090909090",
  "profession": "Teacher",
  "place": "Jaipur"
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


let arr2 = [4, 69, , 66, 5, 225, 552, 55, 25, 565, 2, 55, 2, 55, 2];

arr2.sort((a, b) => a - b);

console.log(arr2);

console.log(arr2.find((val => val > 20)));
console.log(arr2.findIndex((val) => val === 2));
console.log(arr2.findLastIndex((val)=> val=== 2));

console.log(arr2.filter((val => val > 4)));

console.log(arr2.slice(0,2));

let str = "This is a srting";

console.log(str.charAt(5));

console.log(str.toUpperCase);
