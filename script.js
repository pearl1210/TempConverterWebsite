let select = document.getElementById("selector");
let display1 = document.getElementById("outTemp1");

function convertTemp() {
    let tempInput = document.getElementById("inTemp").value;
    let value = select.value;
    if (value === "celcius") {
        display1.value = (tempInput * (9 / 5) + 32) ;
    } else if (value === "fahrenheit") {
        display1.value = (tempInput - 32) * (5 / 9);
    } else if (value === "kelvin") {
        display1.value = (tempInput - 273) * (9 / 5) + 32;
    }
}

function reset(){
    document.getElementById("selector").value = "Select Temperature";
    document.getElementById("outTemp1").value = "";
    document.getElementById("inTemp").value = "";
}