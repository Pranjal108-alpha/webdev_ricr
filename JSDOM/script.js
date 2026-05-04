function submit()
{
    console.log( "Submit Button Clicked");
    
    const fn = document.getElementById("fullname").value;
    console.log(fn);

    document.getElementById("my data").innerText=fn;
    
     document.getElementById("my data").innerText="";
    
}