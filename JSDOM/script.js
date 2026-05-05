function submit()
{
    console.log( "Submit Button Clicked");
    
    const fn = document.getElementById("fullname").value;
    console.log(fn);

    document.getElementById("myData").innerText=fn;
     document.getElementById("myData").value="";
    
    
}