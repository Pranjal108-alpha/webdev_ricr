function submit()
{
    console.log( "Submit Button Clicked");
    
    const fn = document.getElementById("fullname").value;
    console.log(fn);

    if(!/^[A-Za-z\s]+$/.test(fn)){
        document
    }

    const nm = document.getElementById("number").value;
    console.log(nm);

    const em = document.getElementById("email").value;
    console.log(em);

    const wd = document.getElementById("password").value;
    console.log(wd);

}