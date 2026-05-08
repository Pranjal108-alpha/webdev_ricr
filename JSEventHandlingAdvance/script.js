document.getElementById("redbox").addEventListener("mouseover", fillRedcolor);
document.getElementById("redbox").addEventListener("mouseout", fillbasecolor);

document.getElementById("greenbox").addEventListener("mouseover", fillGreencolor);
document.getElementById("greenbox").addEventListener("mouseout", fillbasecolor);


document.getElementById("bluebox").addEventListener("mouseover", fillBluecolor);
document.getElementById("bluebox").addEventListener("mouseout", fillbasecolor);


function fillRedcolor() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}


function fillGreencolor() {
    document.getElementById("bulb1").style.backgroundColor = "green";
}


function fillBluecolor() {
    document.getElementById("bulb1").style.backgroundColor = "blue";
}


function fillBasecolor() {
    document.getElementById("bulb1").style.backgroundColor = "white";
}