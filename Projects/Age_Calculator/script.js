document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const dob = document.getElementById("CurrentAge").value;
  
   // let curYear=Number(currDate.split("-")[0]);
   // let dobYear=Number(dob.split("-")[0]);
   // const Age = curYear - dobYear;

    const Age= Number(currDate.split("-")[0]-Number(dob.split("-")[0]);

    console.log(Age);
    


})